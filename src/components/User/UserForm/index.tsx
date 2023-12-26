import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { getAllUsers, postUser } from '../../../services/api/users';
import { z, ZodError } from "zod";

const UserSchema = z.object({
  fullName: z.string().min(3).max(50),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
  isAdmin: z.boolean()
});


const UserRegForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [formData, setFormData] = React.useState({ fullName: "", username: "", email: "", password: "", isAdmin: false });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleUserRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = UserSchema.parse(formData);
      console.log(validatedData);
      await postUser(validatedData)
      setFormData({fullName: "", username: "", email: "", password: "", isAdmin: false})
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation Error:", error.errors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllUsers();
        setUsers(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box component="form" onSubmit={handleUserRegistration} noValidate sx={{ mt: 1 }}>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullName"
          label="Full Name"
          name="fullName"
          autoComplete="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          required
          fullWidth
          name="password"
          label="Password"
          id="password"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, width: "100%" }} style={{ backgroundColor: "rgb(233,6,6)" }}>
        Sign In
      </Button>
    </Box>
  );
};

export default UserRegForm;
