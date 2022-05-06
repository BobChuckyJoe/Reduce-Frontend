import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, Paper, Typography } from "@mui/material"

import { theme } from 'components/Theme';
import MyAppBar from 'components/MyAppBar';

export default function TestScreen(){
    return (
        <ThemeProvider theme={theme}>
            <MyAppBar title="Home"/>
            <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                <Paper elevation={0} sx = {
                    {
                        marginTop:"1rem",
                        width:"50%",
                        height:"50%"
                    }
                }>
                    <img src="/Reduce_logo.png" alt="Reduce logo"/>
                </Paper>
                <Typography variant="h3" sx={{
                    fontWeight:"bold",
                }}>Hello there!</Typography>
                <Typography sx={{
                    marginLeft:"1rem",
                    marginRight:"1rem",
                    textAlign:"left"
                }}>
                    We are a group of college students that care about spreading awareness about trash output.
                    According to the Environmental Protection Agency (EPA), the average American generates about <strong>1800 pounds</strong> of waste annually.
                    This app will help you keep track of your waste output.<br/><br/>
                    While this app will not be able to solve the problem in its entirety, we believe that a little awareness goes a long way.
                    If we reduced each person's trash output in the US, that'd be an overall reduction of over 300 million pounds!
                    Little steps will take us all a long way.<br/><br/>
                    We look forward to working together to <strong>Reduce</strong> our collective waste output. 
                </Typography>

            </Box>
            
            <Typography variant="subtitle1" sx={{
                marginRight:"1rem",
                textAlign:"right"
            }}>
                    <i>- The Reduce Team</i>
            </Typography>
        </ThemeProvider>
    )
}