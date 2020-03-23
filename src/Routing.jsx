import React, { Component } from "react";
import App from "/home/enas/redux-todo/src/App.js";
import Form from "/home/enas/data/React/cnc_practice2/src/Components/Routing/Navbar.jsx";
import {BrowserRouter, Route} from "react-router-dom";

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Form}/>
                <Route exact path="/todo" component={App}/>
            </BrowserRouter>
        )
    }
}

export default Routing;