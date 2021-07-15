import "./App.css";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from "./components/lib/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import AppTitleBar from "./components/lib/AppTitleBar";
import BottomNavigationBar from "./components/lib/BottomNavigationBar";
import Accounts from "./components/Accounts/Accounts";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LandingPage/LoginPage";
import Axios from "./util/Axios";
import SingleAccountPage from "./components/Accounts/SingleAccountPage";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    }
}));

function App() {
    const classes = useStyles();

    // Auth
    const [auth, setAuth] = useState(false)
    const [accounts, setAccounts] = useState([])
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAccounts()
    },[auth])


    async function getAccounts(){
        try{
            let {data} = await Axios.get(`/api/accounts`)
            setAuth(true)
            setAccounts(data)
        }catch (e) {
            setAuth(false)
            console.log(e)
        }
    }

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline/>
                <AppTitleBar auth={auth} setAuth={setAuth}/>
                {auth && <Navigation/>}
                <main className={classes.content}>
                <Toolbar />
                    <Switch>
                        <Route exact path="/">
                            {!auth ? <LandingPage setAuth={setAuth}/> : <Dashboard accounts={accounts}/>}
                        </Route>
                        <Route exact path="/login">
                            <LoginPage setAuth={setAuth}/>
                        </Route>
                        <PrivateRouter auth={auth} Component={Dashboard} path='/dashboard' accounts={accounts} exact/>
                        <PrivateRouter auth={auth} Component={Accounts} path='/accounts' accounts={accounts} exact/>
                        <PrivateRouter auth={auth} Component={SingleAccountPage} path='/accounts/:id' accounts={accounts} transactions={transactions} setTransactions={setTransactions} exact/>
                    </Switch>
                    {auth && <Toolbar/>}
                </main>
                {auth && <BottomNavigationBar accounts={accounts} setTransactions={setTransactions}/>}
            </div>
        </BrowserRouter>
    );
}

function PrivateRouter({auth, Component, path, location, ...rest}) {
    return (
        <>
            {(auth) ?
                <Route exact path={path}>
                    <Component auth={auth} {...rest} />
                </Route> :
                <Redirect to={{pathname: '/', state: {from: location}}}/>
            }
        </>
    )
}


export default App;
