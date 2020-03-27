import React, { Component } from "react";
import { connect } from "react-redux";
import "/home/enas/redux-todo/src/components/main.css";


class Main extends Component {
  state = {
    content: '',
    id: ''
  }
  handleChange = (e) => {
    this.setState({
      id: e.target.id,
      content: e.target.value
    });
    console.log("handleChange", this.state)

  }
  changeValue = (e) => {
    const inputId = 'E' + e.target.id;
    const text = document.getElementById(inputId).innerHTML;
    document.getElementById(e.target.id).value = text
  }
  clear = (e) => {
    document.getElementById(e.target.id).value = '';
  }


  render() {
    const todoList = this.props.todos.length ? (
      this.props.todos.map(item => {
        const myid = 'E'+item.id;
        return (
            // <ul>
              // <li key={myid}>{item.content}
              <div className="collection-item" key={item.id}>
              <div id={myid}>{item.content}</div>
                <input onChange={this.handleChange} onBlur={this.clear} onFocus={this.changeValue} id={item.id} placeholder="enter updated value here"></input>
                <button onClick={() => { this.props.update(this.state) }}>Edit</button>
                <button onClick={() => { this.props.delete(item.id) }}>Delete</button>
            {/* //   </li>
            // </ul> */}
            </div>
        )}
      )
    ):(
      <p className="center">You have no todo's left, yay!</p>
    );
    return (
      <div className="todos collection">
        {todoList}
      </div>
    )
  }
}
           
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch({ type: 'DEL_TODO', id: id }) },
    update: (updateTodo) => { dispatch({ type: 'UPDATE_TODO', updateTodo: updateTodo }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);























