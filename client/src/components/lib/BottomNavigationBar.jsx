import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Hidden} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {AccountBalanceWallet, BarChart, Home, Settings} from "@material-ui/icons";
import AddTransaction from "./AddTransaction";

export default function BottomNavigationBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            zIndex: theme.zIndex.drawer + 1,
            position: 'fixed',
            bottom: 0,
            left: 0,
            boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)',
        },
    }))
    const classes = useStyles();
    const [value, setValue] = useState('dashboard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <AddTransaction/>
        <Hidden mdUp>

            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction
                    component={NavLink}
                    exact
                    to='/dashboard'
                    label="Dashboard"
                    value="dashboard"
                    icon={<Home/>}
                />
                <BottomNavigationAction
                    component={NavLink}
                    exact
                    to='/'
                    label="Budget"
                    value="budget"
                    icon={<BarChart/>}
                />
                <BottomNavigationAction
                    component={NavLink}
                    exact
                    to='/accounts'
                    label="Accounts"
                    value="accounts"
                    icon={<AccountBalanceWallet/>}
                />
                <BottomNavigationAction
                    component={NavLink}
                    exact
                    to='/'
                    label="Setting"
                    value="setting"
                    icon={<Settings/>}
                />
            </BottomNavigation>
        </Hidden>
        </>
    );
}
