import * as React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export default function NavigationList(props: any) {
    let bottom_stuff = null
    if (props.signed_in) {
        bottom_stuff = 
        <List>
            <ListItem button>
                <ListItemIcon>
                    <AccountBoxIcon/>
                </ListItemIcon>
                <ListItemText primary={`Profile`}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary={"Logout"}/>
            </ListItem>
        </List>
    }
    else {
        bottom_stuff =
        <List>
            <ListItem button>
                <ListItemIcon>
                    <LoginIcon/>
                </ListItemIcon>
                <ListItemText primary={"Login"}/>
            </ListItem>
        </List>
    }
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button key={"Home"}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItem button key={"iodsjf"}>
                    <ListItemIcon>
                        <QueryStatsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"My Stats"}/>
                </ListItem>
            </List>
            <Divider />
            {bottom_stuff}
        </Box>
    );
    
}