export default (state= null, action) => {
  const {prompt, details, id} = action
  switch(action.type) {
    case 'SELECT_CARD':
      return {
        [id] : {
          prompt,
          details,
          id
        }
      };
    case 'DESELECT_CARD':
      return null;
    default:
      return state; 
  }
}