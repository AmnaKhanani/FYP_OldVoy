import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../Login/LOGO.png';
import styled from '@emotion/styled';
import pic from '../Login/pic.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { database } from '../Firebase/firebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"



function Copyright(props) {
 
}

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
  
    email: "",
    password: "",
   
  })

  const [errMsg, setErrMsg] = useState("");
  const [subhmitButtonDisabled, setSubmitButtonSisabled] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setErrMsg("Fill all fields")
      return;
    }
    setErrMsg("")

    setSubmitButtonSisabled(true);

    signInWithEmailAndPassword(database, values.email, values.password)
      .then(async(data) => {
        setSubmitButtonSisabled(false);
        
        navigate('/dashboard')
      })
      .catch((err) => {
        setSubmitButtonSisabled(false);
        setErrMsg("Account doesn't exist, Register your account");
        })


  };
 ;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mt: 2,
              mb: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo}
              style={{
                width: '150px',
                height: '150px'
              }}
            >

            </img>


            <Typography component="h1" variant="h4" color='#004F82'>
              <strong>
                OLDVOY
              </strong>

            </Typography>
            <Typography component="h1" variant="h6" color='black'>
              <strong>Health and Care</strong>

            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Typography component="h6" variant="h6" color='#004F82'>
                <strong>
                  {errMsg}
                </strong>

              </Typography>
              <Button
                type="submit"
                fullWidth
                style={{
                  background: 'linear-gradient(190deg, #14c3d4, #004f82)',

                }}
                contained="variant"

                sx={{ mt: 3, mb: 2, color: 'white' }}
                onClick={handleSubmit}
                disabled={subhmitButtonDisabled}

               
                
              >
                {/* {login?'login':'register'} */}
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{

                    display: 'flex',
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    justifyContent: 'center'
                  }}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item >
                  <Link href="#" variant="body2" style={{

                    marginTop: '100px',
                    display: 'flex',
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    justifyContent: 'center',

                  }}>


                    Don't have an account? <button style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      outline: 'inherit',
                      fontWeight:'bold'
                    }}
                    onClick={() => { navigate('/signUp') }}
                    >Register</button>
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}