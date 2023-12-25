import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import style from "./style.module.css"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// const defaultTheme = createTheme();

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <br style={{marginBottom:'8px'}}/>
      <a color="inherit" href="https://mui.com/">
      You can unsubscribe from emails at any time. By signing up you are agreeing to our Terms of Use and Privacy Policy
      </a>{" "}
      <br style={{marginBottom:'8px'}}/>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <Helmet>
        <title>TIME | Login</title>
      </Helmet>
      {/* <ThemeProvider theme={defaultTheme}> */}
        <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography className={style.heading} variant="h3" component="h2">
                Sign in to your TIME account.
              </Typography>
              <Typography className={style.link} variant="h6" component="h2">
                Don’t have an account? <Link to="/signup" style={{color:'rgb(233, 6, 6)'}}> Create one </Link>.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                  style={{backgroundColor:'rgb(233,6,6)'}}
                >
                  Sign In
                </Button>

                <Copyright sx={{ mt: 5 }} />
              </Box>
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Login;
