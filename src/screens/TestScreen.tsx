import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/Theme';
import MyAppBar from 'components/MyAppBar';

export default function TestScreen(){
    return (
        <ThemeProvider theme={theme}>
            <MyAppBar/>
        </ThemeProvider>
    )
}