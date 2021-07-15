import React from "react";
import Axios from "./Axios";

export async function Login(e, setAuth, username, password, history){
    e.preventDefault()
    try{
        let {data} = await Axios.post(`/api/token/`, {username, password})
        localStorage.setItem("access", data.access)
        localStorage.setItem("refresh", data.refresh)
        setAuth(true)
        history.push("/dashboard")
    }catch (e) {
        console.log(e.response)
    }
}
