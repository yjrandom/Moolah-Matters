import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {Login} from "../../util/Auth";
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

  return (
        <AppBar position="fixed" className={classes.root} color="inherit">
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
                <NavLink to='/' style={{textDecoration: 'none', color: 'black'}} onClick={() => setAuth(false)}>
              MOOLAH MATTERS
                </NavLink>
            </Typography>
              {!auth && <Button type='submit' color="inherit" onClick={(e) => Login(e, setAuth, 'admin', 'admin', history)}>Login</Button>}
          </Toolbar>
        </AppBar>
  );
}
