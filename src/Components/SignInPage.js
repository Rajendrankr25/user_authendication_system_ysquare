import React from 'react';
import '../Components/ComponentStyling.css';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { API } from '../global';

function SignInPage() {

    const navigate = useNavigate();

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            username: "",
            password: ""
        }, onSubmit: async (values) => {

            const data = await fetch(`${API}/user/signin`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });

            if (data.status === 401) {
                alert("Invalid Username or Password");
            } else {
                const result = await data.json();
                localStorage.setItem('token', result.token);
                navigate("/inbox");
            }
        }
    });

    return (
        <div>
            <h1>User Authentication System</h1>
            <div>
                <Card sx={{ minWidth: 375 }} className='signin-card'>
                    <CardContent>
                        <h2>Signin</h2>
                        <p>Please enter your credintials</p>
                        <form className='signin-card1' onSubmit={handleSubmit}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                onChange={handleChange}
                                name='username'
                                value={values.username}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                onChange={handleChange}
                                name='password'
                                value={values.password}
                                type='password'
                            />
                            <Button variant='contained' type='submit'>Login</Button>
                        </form>
                        <p>New user!!! please register...</p>
                        <Button variant='outlined' color='success'
                            onClick={() => navigate("/signup")}
                        >Register</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SignInPage