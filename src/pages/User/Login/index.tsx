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
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import style from "./style.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAllUsers, loginUser } from "../../../services/api/users";
import { getAllPublishers, loginPublisher } from "../../../services/api/Publishers/";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux'
import { user_sign_in, publisher_sign_in } from "../../../redux/userSlice.js"; 
import Swal from 'sweetalert2'

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
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);
  const [datas, setDatas] = React.useState<object>([]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useDispatch();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    async function fetchData(){
      const users = await getAllUsers()
      const publisher = await getAllPublishers();
      
       setDatas([publisher, users])
    }

    fetchData()
  },[])

  React.useEffect(() =>{
    console.log(datas);
  },[datas])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        const findedPublisher = datas[0]?.data.find(
          (x) => x.email === values.email && x.password === values.password
        );
        const findedUser = datas[1]?.data.find(
          (x) => x.email === values.email && x.password === values.password
        );
        if (findedPublisher) {
          loginPublisher(findedPublisher).then((res)=>{
            console.log(res);
          })
          dispatch(publisher_sign_in(findedPublisher._id))
          console.log("publisher:", findedPublisher);
          navigate('/')
        } else if (findedUser) {
          loginUser(findedUser).then((res)=>{
            console.log(res);
          })
          dispatch( user_sign_in(findedUser._id))
          console.log("user:", findedUser);
          navigate('/')
        } else {
          Swal.fire({
            icon: "warning",
            title: "Invalid credentials",
          });
        }
      } catch (error) {
        console.error(error);
      }
      actions.resetForm();
    },
    
  });

  return (
    <>
      <Helmet>
        <title>TIME | Login</title>
      </Helmet>

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
          Don’t have an account? <Link to="/signup" style={{ color: 'rgb(233, 6, 6)' }}> Create one </Link>.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
            style={{ backgroundColor: 'rgb(233,6,6)' }}
          >
            Sign In
          </Button>
        </form>

        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default Login;
