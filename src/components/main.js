import React, { Component } from "react";
import { connect } from "react-redux";
import "/home/enas/redux-todo/src/components/main.css";
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Main extends Component {
  state = {
    content:'',
    id:''
  }
      handleChange = (e) => {
        this.setState({
          id: e.target.id,
          content: e.target.value
        });
        console.log("handleChange",this.state)
  
        }
        changeValue = (e) => {
          const inputId='E'+e.target.id;
          const text=document.getElementById(inputId).innerHTML;
          document.getElementById(e.target.id).value=text
        }
        clear = (e) => {
          document.getElementById(e.target.id).value='';
        }
        
  
      render(){
      const todoList = this.props.todos.length ? (
        this.props.todos.map(todo => {
          const myid = 'E'+todo.id;
            return (
              <div className="box2">  
                <div id={myid} className="input">{todo.content} </div>
                <input onChange={this.handleChange} onBlur={this.clear} onFocus={this.changeValue} id={todo.id} />
                <button onClick={()=>{this.props.update(this.state)}}>Edit<span><FontAwesomeIcon icon={faEdit}/></span></button>
                <button onClick={() => {this.props.delete(todo.id)}}>Delete<span><FontAwesomeIcon icon={faTrash}/></span></button>
                </div>
            )
          })
        ):(<div></div>)
      
        return (
          <div className="todoscollection">
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
          delete: (id) => {dispatch({type:'DEL_TODO', id:id})},
          update: (updateTodo) => {dispatch({type:'UPDATE_TODO', updateTodo:updateTodo})},
        }
      }
      export default connect(mapStateToProps, mapDispatchToProps)(Main);



















