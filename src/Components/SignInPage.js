import React from 'react';
import '../Components/ComponentStyling.css';
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';

function SignInPage() {
    return (
        <div>
            <h1>User Authentication System</h1>
            <div>
                <Card sx={{ minWidth: 375 }} className='signin-card'>
                    <CardContent className='signin-card1'>
                        <h2>Signin</h2>
                        <p>Please enter your credintials</p>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </CardContent>
                    <CardActions className='signin-card2'>
                        <Button variant='contained'>Login</Button>
                        <p>New user!!! please register...</p>
                        <Button variant='outlined' color='success'>Register</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default SignInPage