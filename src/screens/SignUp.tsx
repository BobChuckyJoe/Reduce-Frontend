import * as React from "react"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@emotion/react";
import { theme } from "components/Theme";
import MyAppBar from "components/MyAppBar";
import { Box } from "@mui/system";

export default function SignUp(props: any) {
    const [state, setState] = React.useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: ""
    })
    function getOnChange(value: string) {
        return (e: any) => {
            setState({...state, [value]: e.target.value})
        }
    }

    // const submit = () => {
    //     fetch()
    // }
    return (
        <ThemeProvider theme={theme}>
            <MyAppBar/>
            <form className="form">
                <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={getOnChange("email")} />
                    <TextField id="standard-basic" label="First Name" variant="standard" onChange={getOnChange("first_name")}/>
                    <TextField id="standard-basic" label="Last Name" variant="standard" onChange={getOnChange("last_name")}/>
                    <TextField id="standard-basic" label="Password" variant="standard" onChange={getOnChange("password")}/>
                    <TextField id="standard-basic" label="Confirm Password" variant="standard" onChange={getOnChange("confirm_password")}/>
                    <Button type="button" color="primary" className="form__custom-button">
                    Sign Up
                    </Button>
                </Box>
            </form>
        </ThemeProvider>
    )
}