import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom"

export default function AppTitleBar({auth, setAuth}) {
    let history = useHistory()
    const useStyles = makeStyles((theme) => ({
        root: {
            zIndex: theme.zIndex.drawer + 1,
            flexGrow: 1
        },
        title: {
            flexGrow: 1
        }
    }));
    const classes = useStyles();

    async function logout() {
        try {
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            setAuth(false)
            history.push('/')
        } catch (e) {
            setAuth(false)
            console.log(e)
        }
    }


    return (
        <AppBar position="fixed" className={classes.root} color="inherit">
            <Toolbar>
                <Typography variant="h6" noWrap className={classes.title}>
                    <NavLink to={auth ? '/dashboard' : '/'} style={{textDecoration: 'none', color: 'black'}}>
                        MOOLAH MATTERS
                    </NavLink>
                </Typography>
                {!auth ?
                    <NavLink to='/login' style={{textDecoration: 'none', color: "black"}}>
                        <Button type='submit' color="inherit">Login</Button>
                    </NavLink> :
                    <Button type='submit' color="inherit" onClick={logout}>Logout</Button>
                }
            </Toolbar>
        </AppBar>
    );
}
