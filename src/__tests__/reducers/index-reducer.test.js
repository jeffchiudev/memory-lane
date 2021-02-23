import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import cardListReducer from '../../reducers/card-list-reducer';
import selectCardReducer from '../../reducers/select-card-reducer';
import editingReducer from '../../reducers/editing-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterCardList: {},
      formVisibleOnPage: false,
      editingVisibleOnPage: false,
      selectedCard: null
    });
  });
  test('Check that initial state of cardListReducers matches root reducer', () => {
    expect(store.getState().masterCardList).toEqual(cardListReducer(undefined, {type: null}));
  });
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });
  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedCard).toEqual(selectCardReducer(undefined, {type: null}));
  });
  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editingVisibleOnPage).toEqual(editingReducer(undefined, { type: null}));
  });
  
});