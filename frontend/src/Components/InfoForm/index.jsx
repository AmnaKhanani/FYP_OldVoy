import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
import { database } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from 'react';


function Copyright(props) {

}
const defaultTheme = createTheme();


export default function InfoForm() {
    const navigate = useNavigate();

    const [user, setUsers] = useState({
        Name: "",
        Address: "",
        Age: "",
        Height: "",
        Weight: "",
        Gender: "",
        PatientDieases: ""
    })




    const handleSubmit = async (e) => {
        e.preventDefault();
        // const [Name, Address, Age, Height, Weight, Gender, PatientDieases] = user
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }
        const res = await fetch(
            'https://oldvoy-b0474-default-rtdb.firebaseio.com/UserData.json',
            options
        )
        if(res){
            alert("User Registered")
            navigate('/dashboard')
        }
        else{
            alert("User not registered")
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await fetch('https://oldvoy-b0474-default-rtdb.firebaseio.com/UserData.json', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(user)
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Failed to register user');
    //         }
    
    //         alert("User Registered");
    //         // Optionally, you can clear the form after successful submission
    //         setUsers({
    //             Name: "",
    //             Address: "",
    //             Age: "",
    //             Height: "",
    //             Weight: "",
    //             Gender: "",
    //             PatientDieases: ""
    //         });
    //     } catch (error) {
    //         alert("User not registered: " + error.message);
    //     }
    // };

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
                        <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                        value={user.Name}
                                margin="normal"
                                required
                                fullWidth
                                id="Name"
                                label="Name "
                                // name="Name"
                                // autoComplete="Name"
                                
                                autoFocus
                                onChange={(e) => setUsers((prev) => ({ ...prev, Name: e.target.value }))}
                            />
                           

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Address"
                                label="Address "
                                name="Address"
                                autoComplete="Address"
                                // value={user.Address}
                                autoFocus
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, Address: e.target.value }))}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Age"
                                label="Age"
                                type="Age"
                                id="Age"
                                autoComplete="Age"
                                value={user.Age}
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, Age: e.target.value }))}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Height"
                                label="Height"
                                type="Height"
                                id="Height"
                                autoComplete="Height"
                                value={user.Height}
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, Height: e.target.value }))}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Weight"
                                label="Weight"
                                type="Weight"
                                id="Weight"
                                value={user.Weight}
                                autoComplete="Weight"
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, Weight: e.target.value }))}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Gender"
                                label="Gender"
                                type="Gender"
                                id="Gender"
                                value={user.Gender}
                                autoComplete="Gender"
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, Gender: e.target.value }))}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Patient Dieases"
                                label="Patient Dieases"
                                type="Patient Dieases"
                                id="PatientDieases"
                                autoComplete="Patient Dieases"
                                value={user.PatientDieases}
                                // onChange={data}
                                onChange={(e) => setUsers((prev) => ({ ...prev, PatientDieases: e.target.value }))}
                            />

                            <Typography component="h6" variant="h6" color='#004F82'>
                                <strong>
                                    {/* {errMsg} */}
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
                                // onClick={() => { navigate('/dashboard') }}
                                onClick={handleSubmit}
                            // disabled={subhmitButtonDisabled}
                            >
                                Submit
                            </Button>
                            {/* <Grid container>
                                <Grid item >
                                    <Link href="#" variant="body2" style={{


                                        display: 'flex',
                                        color: 'black',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        justifyContent: 'center',

                                    }}>


                                        Already have an account?
                                        <button style={{
                                            background: 'none',
                                            border: 'none',
                                            padding: 0,
                                            cursor: 'pointer',
                                            outline: 'inherit',
                                            fontWeight: 'bold'
                                        }}
                                            onClick={() => { navigate('/login') }}
                                        >Login</button>
                                    </Link>
                                </Grid>
                            </Grid> */}

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}