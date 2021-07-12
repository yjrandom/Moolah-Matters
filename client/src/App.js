import "./App.css";
import Axios from "./util/Axios";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from "./components/lib/Navigation";
import Dashboard from "./components/Dashboard";
import AppTitleBar from "./components/lib/AppTitleBar";

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
                <AppTitleBar/>
                <Navigation/>
                <main className={classes.content}>
                    <Toolbar/>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
