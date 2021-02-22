import cardListReducer from '../../reducers/card-list-reducer';

describe('cardListReducer', () => {

  let action;
  const cardData = {
    prompt: 'test prompt',
    details: 'test details',
    id: 1,
  };
  const currentState = {
    1: {
      prompt: 'test prompt',
      details: 'test details',
      id: 1
    },
    2: {
      prompt: 'test2 prompt',
      details: 'test2 details',
      id: 2
    }
  }
  
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

  test('should correctly delete a card', () => {
    action = {
      type: 'DELETE_CARD',
      id:1
    };
    expect(cardListReducer(currentState, action)).toEqual({
      2: {
        prompt: 'test2 prompt',
        details: 'test2 details',
        id: 2
      }
    });
  });
  
});