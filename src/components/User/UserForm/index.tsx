import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormControl, IconButton, InputAdornment, InputLabel,  OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {getAllUsers} from '../../../services/api/users';
import { z } from "zod";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <br style={{ marginBottom: "8px" }} />
      <a color="inherit" href="https://mui.com/">
        You can unsubscribe from emails at any time. By signing up you are
        agreeing to our Terms of Use and Privacy Policy
      </a>{" "}
      <br style={{ marginBottom: "8px" }} />
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const UserRegForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [users, setUsers]=React.useState([])

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleUserRegistration: any = (e: any) => {
    e.preventDefault();
    console.log("user");
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
        <TextField margin="normal" required fullWidth id="fullName" label="Full Name" name="fullName" autoComplete="fullName" />
        <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="Username" />
        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput required fullWidth name="password" label="Password" id="password" autoComplete="current-password" type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, width: "100%" }} style={{ backgroundColor: "rgb(233,6,6)"}} >
        Sign In
      </Button>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  )
}

export default UserRegForm