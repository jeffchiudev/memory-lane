import selectCardReducer from '../../reducers/select-card-reducer';

describe('selectCardReducer', () => {

  let action;

  const card = {
    prompt: "test",
    details: "test",
    id: 1
  }

  test('Should return default state if no types is recognized', () => {
    expect(selectCardReducer({}, {type: null})).toEqual({});
  });
  test('Should return selected card when SELECT_CARD is called', () => {
    const { prompt, details, id } = card;
    const action = {
      type: 'SELECT_CARD',
      prompt,
      details,
      id
    }
    expect(selectCardReducer({}, action)).toEqual({
      [id] : {
        prompt,
        details,
        id
      }
    });
  });
  test('Should return null when DESELECT_CARD is called', () => {
    const action = {
      type: 'DESELECT_CARD'
    }
    expect(selectCardReducer({}, action)).toEqual(null);
  });
});