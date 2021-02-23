export default (state= null, action) => {
  // const {prompt, details, id} = action
  switch(action.type) {
    case 'SELECT_CARD':
      return action.card;
    case 'DESELECT_CARD':
      return null;
    default:
      return state; 
  }
}