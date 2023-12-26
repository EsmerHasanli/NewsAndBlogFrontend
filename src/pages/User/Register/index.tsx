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
import UserRegForm from "../../../components/User/UserForm";
import PublisherRegForm from "../../../components/User/PublisherForm";

// const defaultTheme = createTheme();


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <br style={{ marginBottom: "8px" }} />
      <a color="inherit" href="https://mui.com/">
        You can unsubscribe from emails at any time. By signing up you are agreeing to our Terms of Use and Privacy Policy
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
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
            <PublisherRegForm/>
          </TabPanel>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Register;
