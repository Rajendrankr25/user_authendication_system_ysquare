import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Hi, Welcome to User Authendication System...</h1>
            <br /><br />
            <h2>Your login is successful...</h2>
            <Button variant='contained'
                onClick={() => navigate("/")}
            >Logout</Button>
        </div>
    )
}

export default WelcomePage