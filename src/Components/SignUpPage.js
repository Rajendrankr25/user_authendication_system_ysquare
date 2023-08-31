import React from 'react';
import '../Components/ComponentStyling.css';
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';

function SignUpPage() {
    return (
        <div>
            <h1>User Authentication System</h1>
            <div>
                <Card sx={{ minWidth: 275 }} className='signin-card'>
                    <CardContent className='signin-card1'>
                        <h2>Sign Up</h2>
                        <p>Please enter your details</p>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <TextField id="outlined-basic" label="Enter Password" variant="outlined" />
                        <TextField id="outlined-basic" label="Re-Enter Password" variant="outlined" />
                    </CardContent>
                    <CardActions className='signin-card2'>
                        <Button variant='contained' color='success'>Register</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default SignUpPage