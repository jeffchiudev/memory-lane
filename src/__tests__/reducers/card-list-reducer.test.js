import cardListReducer from '../../reducers/card-list-reducer';

describe('cardListReducer', () => {

  test('Should return default state if no action type passed into the reducer', () => {
    expect(cardListReducer({}, { type: null })).toEqual({});
  })
  
});