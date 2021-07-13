import React from 'react';
import {NavLink} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {AccountBalanceWallet, BarChart, Home, Settings} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Navigation(props) {
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <NavLink exact to='/' style={{textDecoration: 'none', color:'black'}}>
                <ListItem button key='Dashboard'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary='Dashboard'/>
                </ListItem>
                </NavLink>
                <ListItem button key='Statistics'>
                    <ListItemIcon>
                        <BarChart/>
                    </ListItemIcon>
                    <ListItemText primary='Statistics'/>
                </ListItem>
                <NavLink exact to='/accounts' style={{textDecoration: 'none', color:'black'}}>
                <ListItem button key='Accounts'>

                        <ListItemIcon>
                            <AccountBalanceWallet/>
                        </ListItemIcon>
                        <ListItemText primary='Accounts'/>

                </ListItem>
                </NavLink>
                <ListItem button key='Settings'>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary='Settings'/>
                </ListItem>
            </List>
            <Divider/>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}
