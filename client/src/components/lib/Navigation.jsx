import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home, BarChart, AccountBalanceWallet, Settings } from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    }
}));

export default function ClippedDrawer() {
    const classes = useStyles();

    return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button key='Dashboard'>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary='Dashboard'/>
                        </ListItem>
                        <ListItem button key='Budget'>
                            <ListItemIcon>
                                <BarChart/>
                            </ListItemIcon>
                            <ListItemText primary='Budget'/>
                        </ListItem>
                        <ListItem button key='Accounts'>
                            <ListItemIcon>
                                <AccountBalanceWallet/>
                            </ListItemIcon>
                            <ListItemText primary='Accounts'/>
                        </ListItem>
                        <ListItem button key='Settings'>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary='Settings'/>
                        </ListItem>
                        <Divider />
                    </List>
                </div>
            </Drawer>
    );
}
