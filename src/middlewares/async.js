export default ({dispatch})=>(next)=>(action)=>{
  //check to see if the action
  //has a promise on its 'payload' property
  //if it does, then wait for it to resolve
  //if it doesn't then send the action on to the next middleware
  if(action.payload || !action.payload.then){
      return next(action)
  }
  //we want to wait for the promise to resolve
  //get its data and then create a new function
  //with that data and dispatch it 
  action.payload.then(function(response){
      const newAction ={...action,payload:response};
      dispatch(newAction);
  })
}
    
