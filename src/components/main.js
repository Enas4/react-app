import React, {Component} from "react";
import {connect} from "react-redux";
import "/home/enas/redux-todo/src/components/main.css";


class Main extends Component{
    render(){
      return( 
         <div className="box2">
        <ul>
          {this.props.todos.map(item => {
            return <li key={item.id}>{item.content}
              <button onClick={() => this.props.delete(item.id)}>Delete</button>
            </li>
          })}
        </ul>

      </div>
      )
        }
      }
      const mapStateToProps=(state)=>{
        return{
            todos: state.todos
        }
    }
    const mapDispatchToProps=(dispatch)=>{
          return{
              delete:(id)=>{dispatch({type:'REMOVE_INPUT', id:id})}
          }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Main);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//         const todoList = this.props.todos? 
//             (this.props.todos.map(item => {
//                 return (
//                   <div key={item.id} className="box2">
//                     <ul>
//                       <li>{item.content}
//                       <button onClick={() => {this.props.delete(item.id)}}>Delete</button></li>
//                     </ul>
                    
//                   </div>
//                 )
//               })
//             ) : (<p >You have no todo's left!</p>);

//         return(
//         {todoList}
//         )
//     }
// }

// const mapStateToProps=(state)=>{
    
//     return{
//         todos: state.todos
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//       return{
//           delete:(id)=>{dispatch({type:'REMOVE_INPUT', id:id})}
//       }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
























// class Main extends Component{
//     state={}
//     render(){
//         return(
//             <div className="main-box">
//               {this.props.todo.map(el=><li className="list" key={el.id} onClick={()=>{this.props.remove(el.id)}} >
//                   {el.inputValue}</li>)}
//                   <button onClick={(id)=>{this.props.remove(id)}}>Remove</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state)=>{
//     console.log('Add state from redux',state)
//     return {todo: state.main}
// }
// const mapDispatchToProps=(dispatch)=>{
//    return{
//        remove:(id)=>{
//         dispatch ({type:"REMOVE_INPUT",id:id})
//        }
       
//    }
// }
// export default connect( mapStateToProps, mapDispatchToProps)(Main);