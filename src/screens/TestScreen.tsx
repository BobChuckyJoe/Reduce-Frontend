import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import MenuDrawer from 'components/MenuDrawer';

export default function TestScreen(){
    const [state, setState] = React.useState({
        "open": false
    })
    const closeDrawer = () => {
        setState({...state, ["open"]: false})
    }
    const openDrawer = () => {
        setState({...state, ["open"]: true})
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuDrawer open={state["open"]} onClose={closeDrawer}/>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={openDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}