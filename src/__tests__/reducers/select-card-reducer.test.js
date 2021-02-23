import selectCardReducer from '../../reducers/select-card-reducer';

describe('selectCardReducer', () => {
  test('Should return default state if no types is recognized', () => {
    expect(selectCardReducer({}, {type: null})).toEqual({});
  });
});