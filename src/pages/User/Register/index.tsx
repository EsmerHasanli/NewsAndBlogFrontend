import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, IconButton, InputAdornment, InputLabel,  OutlinedInput, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Helmet } from 'react-helmet';
import {getAllUsers} from '../../../services/api/users';
import UserRegForm from "../../../components/User/UserForm";

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePublisherRegistration: any = (e: any) => {
    e.preventDefault();
    console.log("publisher");
  };

  return (
    <>
    <Helmet>
      <title>TIME | Register</title>
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
            Create your account.
          </Typography>
          <Typography className={style.link} variant="h6" component="h2">
            Already have a TIME account?{" "}
            <Link to="/signin" style={{ color: "rgb(233, 6, 6)" }}>
              Sign in.{" "}
            </Link>
          </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#red"
              }
            }}
          >
            <Tab
              value="one"
              label="User"
            />
            <Tab value="two" label="Publisher" />
          </Tabs>

          <TabPanel value={value} index="one">
<UserRegForm/>
          </TabPanel>

          <TabPanel value={value} index="two">
            <Box
              component="form"
              onSubmit={handlePublisherRegistration}
              noValidate
              sx={{ mt: 1 }}
            >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fullName"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="description"
                  label="Descripion"
                  name="description"
                  autoComplete="description"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="profileImg"
                  label="Profile Image"
                  name="profileImg"
                  autoComplete="profileImg"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="backgroundImg"
                  label="Background Image"
                  name="backgroundImg"
                  autoComplete="backgroundImg"
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
                style={{ backgroundColor: "rgb(233,6,6)" }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </TabPanel>
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Register;
