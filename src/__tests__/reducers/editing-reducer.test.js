import editingReducer from '../../reducers/editing-reducer';

describe ("editingReducer", () => {
  test('should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });
  test('should toggle editing state to true', () => {
    expect(editingReducer(false, { type: 'TOGGLE_EDIT'})).toEqual(true);
  })
})