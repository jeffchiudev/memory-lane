import cardListReducer from '../../reducers/card-list-reducer';

describe('cardListReducer', () => {

  let action;
  const cardData = {
    prompt: 'test prompt',
    details: 'test details',
    id: 1,
  };
  
  test('Should return default state if no action type passed into the reducer', () => {
    expect(cardListReducer({}, { type: null })).toEqual({});
  })

  test('Should add a card to the masterCardList', () => {
    const { prompt, details, id } = cardData;
    action = {
      type: 'ADD_CARD',
      prompt,
      details,
      id
    }
    expect(cardListReducer({}, action)).toEqual({
      [id]: {
        prompt,
        details,
        id
      }
    });
  });
  
});