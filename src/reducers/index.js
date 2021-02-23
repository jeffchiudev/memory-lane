import cardListReducer from './card-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import selectCardReducer from './select-card-reducer';
import editingReducer from './editing-reducer';
// import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  masterCardList: cardListReducer,
  formVisibleOnPage: formVisibleReducer,
  editingVisibleOnPage: editingReducer,
  selectedCard: selectCardReducer
  // firestore: firestoreReducer
});

export default rootReducer;