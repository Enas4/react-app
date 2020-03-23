import React, {Component} from 'react';
import {connect} from "react-redux";
import Input from "/home/enas/redux-todo/src/components/input.js";
import Main from "/home/enas/redux-todo/src/components/main.js";
import Form from "/home/enas/redux-todo/src/components/Form.js";


class App extends Component{
  render(){
    return(
      <div>
       <Input />
       <Main />
       <Form />
      </div>
    )
  }
}

export default connect()(App);