import * as c from './ActionTypes';

export const addCard = (card) => {
  const {prompt, details, id} = card;
  return {
    type: c.ADD_CARD,
    prompt,
    details,
    id
  }
}

export const deleteCard = id => ({
  type: c.DELETE_CARD,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectCard = () => ({
  type: c.SELECT_CARD
});

export const deselectCard = () => ({
  type: c.DESELECT_CARD
});



