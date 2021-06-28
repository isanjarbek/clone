import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useSidebarMenuStyles } from './sidebarMenuStyles';



export default function SidebarMenu({ open, setOpen }) {
    const classes = useSidebarMenuStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.name}>
                    jkasfkdh
                </div>
            </Drawer>
        </div>
    );
}
