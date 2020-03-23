const iState={
    username:"enas",
    password:"12345",
    isLoggedIn:false
}
const Input = (state=iState, action)=>{
  console.log(action)
  console.log(action.payload)
  if(action.type==="SUBMIT_INPUT"){
    if(state.username===action.payload.username && state.password===action.payload.password){
     state.isLoggedIn=true
     console.log("success");
    }else{
      state.isLoggedIn=false
      console.log("failure");
    }
  }
    return state;
}

export default Input;