const inItState ={todos:[]}

const mainReducer = (state=inItState,action) => {
  switch(action.type){
    case 'ADD_INPUT':
      return {
        todos: [...state.todos, action.addit]
        }
      
      case 'REMOVE_INPUT':
        let newTodo = state.todos.filter(item => item.id!==action.id)
        return {
          todos: newTodo
        }
      default: return state;
  }
}
export default mainReducer;