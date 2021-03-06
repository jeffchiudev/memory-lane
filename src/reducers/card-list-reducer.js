export default (state = {}, action) => {
  const {prompt, details, id} = action;
  switch(action.type){
    case 'ADD_CARD':
      return Object.assign({}, state, {
        [id]: {
          prompt,
          details,
          id
        }
      });
    case 'DELETE_CARD':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};