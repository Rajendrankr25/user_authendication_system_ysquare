import React from 'react';
import '../Components/ComponentStyling.css';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {

    const navigate = useNavigate();

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            name: "",
            username: "",
            password: ""
        }, onSubmit: async (values) => {

            const data = await fetch(`${API}/user/signup`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });

            if (data.status === 400) {
                alert("Username already exists");
            } else {
                alert("User Registered Successfully!!!");
                navigate("/");
            }
        }
    });

    return (
        <div>
            <h1>User Authentication System</h1>
            <div>
                <Card sx={{ minWidth: 275 }} className='signin-card'>
                    <CardContent >
                        <h2>Sign Up</h2>
                        <p>Please enter your details</p>
                        <form className='signin-card1' onSubmit={handleSubmit}>
                            <TextField
                                name='name'
                                label="Enter your Name"
                                variant="outlined"
                                onChange={handleChange}
                                value={values.name}
                            />
                            <TextField
                                name='username'
                                label="Enter Username"
                                variant="outlined"
                                onChange={handleChange}
                                value={values.username}
                            />
                            <TextField
                                name='password'
                                label="Enter Password"
                                variant="outlined"
                                onChange={handleChange}
                                type='password'
                                value={values.password}
                            />
                            <TextField
                                label="Re-Enter Password"
                                variant="outlined"
                                type='password'
                            />
                            <Button variant='contained' color='success' type='submit'>Register</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SignUpPage