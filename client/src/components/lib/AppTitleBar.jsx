import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useMediaQuery, useTheme} from "@material-ui/core";

export default function AppTitleBar() {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        }
    }));

    const classes = useStyles();

  return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography variant="h6" noWrap>
              MOOLAH MATTERS
            </Typography>
          </Toolbar>
        </AppBar>
  );
}
