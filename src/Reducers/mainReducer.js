
const inItState ={todos:[],isLoggedIn:false,misMatch:false}

const mainReducer = (state=inItState,action) => {
  switch(action.type){
    case "LOGOUT":
      return{...state,
      isLoggedIn:false
      }
      case "LOGIN":
        if(action.payload.username==="enas" && action.payload.password === "12345"){
          console.log("success");
          return{...state,isLoggedIn:true}
        }else{
          console.log("failure");
          return{...state,isLoggedIn:false,misMatch:true}
        }
        case "ADD_TODO":
          return{
            todos:[...state.todos, action.addit],
            isLoggedIn:state.isLoggedIn
          }
          case "DEL_TODO":
            let newTodo = state.todos.filter(item => item.id!==action.id)
            return{
                todos:newTodo,
                isLoggedIn:state.isLoggedIn
            }
            case 'UPDATE_TODO':
        let con = Number(action.updateTodo.id);
        return {todos:state.todos.map(
          todo =>
          todo.id === con
              ? {
                  ...todo,
                  content: action.updateTodo.content
                }
              : todo
        ),
        isLoggedIn: state.isLoggedIn
              }
        default: return state;
          }
        }
        export default mainReducer;
  
