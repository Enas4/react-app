import React, { Component } from 'react';
import { connect } from "react-redux";
import Input from "/home/enas/redux-todo/src/components/input.js";
import Main from "/home/enas/redux-todo/src/components/main.js";
import Form from "/home/enas/redux-todo/src/components/Form.js";
import "/home/enas/redux-todo/src/App.css";


class App extends Component {
  render() {
console.log("my map", this.props.isLoggedIn)  
    if (this.props.isLoggedIn) {
      return (
        <div>
          <div className="logout_button"><button onClick={this.props.logout}>LOGOUT</button></div>
          <Input />
          <Main />
        </div>
      );
    }
    else {
      return (<Form />)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch({ type: "LOGOUT" }) }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);