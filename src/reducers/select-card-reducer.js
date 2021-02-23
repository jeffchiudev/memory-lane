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
    default:
      return state; 
  }
}