import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {postPublisher} from '../../../services/api/Publishers';
import { ZodError, z } from "zod";

const PublisherSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6),
    email: z.string().email(),
    profileImg: z.string().optional(),
    backgroundImg: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    joinedDate : z.date(),
    isVerified: z.boolean(),
  });

const PublisherRegForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({ username: "", password: "", email: "", profileImg:"",  backgroundImg: "", name:"", description:"", joinedDate:new Date(), isVerified:false });
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePublisherRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = PublisherSchema.parse(formData);
      console.log(validatedData);
      await postPublisher(validatedData)
      setFormData({username: "", password: "", email: "", profileImg:"", backgroundImg: "", name:"", description:"", joinedDate: new Date(),isVerified: false})
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation Error:", error.errors);
      }
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handlePublisherRegistration}
        noValidate
        sx={{ mt: 1 }}
      >
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <TextField margin="normal" required fullWidth id="name" label="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="Username" value={formData.username} onChange={handleChange} />
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
          <TextField margin="normal" fullWidth id="description" label="Descripion" name="description" autoComplete="description" value={formData.description} onChange={handleChange} />
          <TextField margin="normal" fullWidth id="profileImg" label="Profile Image" name="profileImg" autoComplete="profileImg" value={formData.profileImg} onChange={handleChange}/>
          <TextField margin="normal" fullWidth id="backgroundImg" label="Background Image" name="backgroundImg" autoComplete="backgroundImg" value={formData.backgroundImg} onChange={handleChange} />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput required fullWidth name="password" label="Password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "100%" }}
          style={{ backgroundColor: "rgb(233,6,6)" }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default PublisherRegForm;
