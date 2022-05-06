import * as React from "react"
import { ThemeProvider, Box, Alert, TextField, Button, Paper} from "@mui/material"
import { useNavigate } from 'react-router-dom'

import { loginURL } from "Endpoints"
import { theme } from "components/Theme"

export default function Login() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")        
    
    const [errorMessage, setErrorMessage] = React.useState({
        "show": false,
        "message": "",
        "severity": "error"
    })

    const navigate = useNavigate()

    const submit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email":email,
                "password":password
            })
        }
        fetch(loginURL, requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data["ok"] === "true"){
                // Set local variable
                localStorage.setItem("session_id", data["session_id"])
                // Redirect to stats page
                navigate("/stats")
            }
            else {
                setErrorMessage({
                    "show":true,
                    "message": data["error_message"],
                    "severity":"error"
                })
            }
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >   
                <Paper sx ={{
                    width:"50%",
                    height:"50%"
                }}
                elevation={0}
                >
                    <img src="/Reduce_logo.png" alt="Reduce Logo"/>
                </Paper>
                    {errorMessage.show && 
                       <Alert severity={errorMessage.severity === "success" ? "success" : 
                                        errorMessage.severity === "error" ? "error" :
                                        "error" }>{errorMessage.message}</Alert> }
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="button" color="primary" onClick={submit}>
                    Login
                    </Button>
                </Box>
        </ThemeProvider>
    )
}