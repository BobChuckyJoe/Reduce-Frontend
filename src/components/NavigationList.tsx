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
import CollectionsIcon from '@mui/icons-material/Collections';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from 'react-router';

export default function NavigationList(props: any) {
    const navigate = useNavigate()
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
            <ListItem button onClick={
                () => {
                    localStorage.removeItem("session_id")
                    navigate("/")
                }
            }>
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
            <ListItem button onClick={
                () => {
                    navigate("/login")
                }
            }>
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
                <ListItem button onClick= {
                    () => {
                        navigate("/")
                    }
                }>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItem button onClick={
                    () => {
                        navigate("/stats")
                    }
                }>
                    <ListItemIcon>
                        <QueryStatsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"My Stats"}/>
                </ListItem>
                <ListItem button onClick={
                    () => {
                        navigate("/gallery")
                    }
                }>
                    <ListItemIcon>
                        <CollectionsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Gallery"}/>
                </ListItem>
                <ListItem button onClick={
                    () => {
                        navigate("/upload")
                    }
                }>
                    <ListItemIcon>
                        <UploadIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Upload"}/>
                </ListItem>
            </List>
            <Divider/>
            {bottom_stuff}
        </Box>
    );
    
}