/* reducer?
  * fn that takes in state and an action
  * returns a new state
  * must return state based on the action type 
  * can be called by dispatching an action type
*/

/* what is an action? 
  * action is an object 
  * must have a type property
  * can have a payload property (optional)
*/

const todoReducer = function(state = [], action){
  console.log("Inside TodoReducer");
  // based on the action type must return state
  switch(action.type){
    case 'ADD_TODO':
      return [ 
        ...state, 
        action.payload
      ];
    
    // case 'DELETE_TODO':
    //   return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
}

export default todoReducer;
