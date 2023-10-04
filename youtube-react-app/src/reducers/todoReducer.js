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

// CRUD App -- Create Read Update Delete
// Create -- Add Todo [DONE]
// Read -- List Todos [DONE]
// Update -- Edit Todo [TODO]
// Delete -- Delete Todo [DONE]

const todoReducer = function(state = [], action){
  console.log("Inside TodoReducer");
  // must return state;
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];

    case 'LIST_TODOS':
      return action.payload;
    
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}

export default todoReducer;
