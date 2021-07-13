import "./App.css";
import Axios from "./util/Axios";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from "./components/lib/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import AppTitleBar from "./components/lib/AppTitleBar";
import BottomNavigationBar from "./components/lib/BottomNavigationBar";
import {useMediaQuery, useTheme} from "@material-ui/core";
import Accounts from "./components/Accounts/Accounts";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const classes = useStyles();

    // async function login(username, password){
    //     try{
    //       let {data} = await Axios.post(`/api/token/`, {username, password})
    //       localStorage.setItem("access", data.access)
    //       localStorage.setItem("refresh", data.refresh)
    //     }catch (e) {
    //       console.log(e.response)
    //     }
    // }

    // async function getBooks(username, password){
    //       try{
    //           let {data} = await Axios.get(`/api/`)
    //           console.log(data)
    //       }catch (e) {
    //           console.log(e.response)
    //       }
    //   }

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline/>
                {matches && <AppTitleBar/>}
                <Navigation/>
                <main className={classes.content}>
                    {matches && <Toolbar/>}
                    <Switch>
                        <Route exact path="/">
                            <Dashboard/>
                        </Route>
                        <Route exact path="/accounts">
                            <Accounts/>
                        </Route>
                    </Switch>
                </main>
                <BottomNavigationBar />
            </div>
        </BrowserRouter>
    );
}

export default App;
