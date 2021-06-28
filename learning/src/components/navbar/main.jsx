import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer'
import { MenuNavStyle } from './style'

export default function NavbarMenu({ open, setOpen }) {
    const classes = MenuNavStyle();

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
                <div className={classes.drawerHeader}>
                    ohjjjjjjjlk
                </div>
            </Drawer>
        </div>
    );
}

