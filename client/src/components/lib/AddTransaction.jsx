import React from 'react'
import {Fab, useTheme, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Add} from '@material-ui/icons'

export default function AddTransaction() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const useStyles = makeStyles((theme) => ({
        root: {
            position: "fixed",
            bottom: `${matches ? '10px' : '20px'}`,
            right: `${matches ? '10px' : 'calc(50%)'}`,
            transform: `${matches ? '': 'translate(50%, 0)'}`,
            zIndex: theme.zIndex.drawer + 2,
            '& > *': {
                margin: theme.spacing(1),
                backgroundColor: '#6199F5',
                boxShadow: '0 -2px 4px 0 rgb(0,0,0,0.2)'
                // border: '2px solid',
                // borderColor: '#7aa9fa'
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return (
                <div className={classes.root}>
                    <Fab
                        color='primary'
                        aria-label="add"
                        variant={matches ? 'extended' : 'circular'}
                        size='medium'
                    >
                        <Add />
                        {matches ? 'New Transaction' : ''}
                    </Fab>
                </div>
    )
}
