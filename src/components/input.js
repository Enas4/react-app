import React, {Component} from "react";
import {connect} from "react-redux";
import "/home/enas/redux-todo/src/components/input.css";


class Input extends Component{
    state={
        content:""
    }
    handleChange=(e)=>{
         this.setState({
            id: Math.random().toString(36).substr(2, 9),
             content:e.target.value
            
         })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            content:""
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="box">
                    <h1>Redux todo App</h1>
                    <label>Add a new todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
  }
const mapDispatchToProps =(dispatch)=>{
    return{
        add:(todo)=>{dispatch({type:"ADD_INPUT", addit:todo})}
}
}
export default connect( mapStateToProps, mapDispatchToProps)(Input);
