import * as React from "react"
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@emotion/react";
import { theme } from "components/Theme";
import MyAppBar from "components/MyAppBar";
import { Box } from "@mui/system";

import * as Endpoints from "Endpoints"
export default function SignUp(props: any) {
    const [state, setState] = React.useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: ""
    })

    const [errorMessage, setErrorMessage] = React.useState({
        show: false,
        severity:"error",
        message:""
    })
    // Testing
    

    function getOnChange(value: string) {
        return (e: any) => {
            setState({...state, [value]: e.target.value})
        }
    }

    const submit = () => {
        // Check that passwords match
        if (state.password !== state.confirm_password) {
            // Show some error message
            setErrorMessage({
                show:true,
                severity:"error",
                message:"Your passwords do not match!"
            })
        }
        // Send request to backend
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        }
        fetch(Endpoints.signupURL, requestOptions)
            .then(response => response.json())
            .then(data =>{
                if (data["ok"] === "true") {
                    // Account created
                    setErrorMessage({
                        show:true,
                        severity:"success",
                        message:`Account created! Welcome ${state.first_name}`
                    })
                    // Persistent variables to keep track of the fact that the user is logged in
                    localStorage.setItem("session_id", data["session_id"])
                    localStorage.setItem("logged_in", "true")
                }
                else {
                    setErrorMessage({
                        show:true,
                        severity:"error",
                        message:data["error_message"]
                    })
                }
            })
    }
    return (
        <ThemeProvider theme={theme}>
            <MyAppBar title={"Sign Up"}/>
            <form className="form">
                <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >   
                    {errorMessage.show && 
                       <Alert severity={errorMessage.severity === "success" ? "success" : 
                                        errorMessage.severity === "error" ? "error" :
                                        "error" }>{errorMessage.message}</Alert> }
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={getOnChange("email")} />
                    <TextField id="standard-basic" label="First Name" variant="standard" onChange={getOnChange("first_name")}/>
                    <TextField id="standard-basic" label="Last Name" variant="standard" onChange={getOnChange("last_name")}/>
                    <TextField id="standard-basic" label="Password" variant="standard" onChange={getOnChange("password")}/>
                    <TextField id="standard-basic" label="Confirm Password" variant="standard" onChange={getOnChange("confirm_password")}/>
                    <Button type="button" color="primary" onClick={submit}>
                    Sign Up
                    </Button>
                </Box>
            </form>
        </ThemeProvider>
    )
}