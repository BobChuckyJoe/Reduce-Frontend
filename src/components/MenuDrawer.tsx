import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import NavigationList from './NavigationList';


export default function MenuDrawer(props: any){
    const anchor = "left"
    return (
        <React.Fragment key={anchor}>
            <Drawer
                anchor={anchor}
                open={props.open}
                onClose={props.onClose}
            >
            <NavigationList/>
           </Drawer>
        </React.Fragment>        
    )
}