import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import EditCardForm from './EditCardForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class CardControl extends React.Component {

  handleClick = () => {
    if (this.props.selectedCard != null) {
      const {dispatch} = this.props;
      const action = a.deselectCard();
      dispatch(action);
    } else {
      const {dispatch} = this.props
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleAddingNewCardToList = (newCard) => {
    const {dispatch} = this.props;
    // const action = a.addCard(newCard)
    // dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedCard = (id) => {
    this.props.firestore.get({collection: 'cards', doc: id}).then((card) => {
      const {dispatch} = this.props;
      const firestoreCard = {
        prompt: card.get("prompt"),
        details: card.get("details"),
        id: card.id
      }
      const action = a.selectCard(firestoreCard);
      dispatch(action);
    }); 
  }

  handleEditingCardInList = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
    const action2 = a.deselectCard();
    dispatch(action2);
  }

  handleDeletingCard = (id) => {
    this.props.firestore.delete({collection: 'cards', doc: id});


    const {dispatch} = this.props;
    const action = a.deselectCard();
    dispatch(action);
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null )) {
      return (
        <>
          <h1>You must be signed in to access flash cards.</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      
      if(this.props.editingVisibleOnPage) {
        currentlyVisibleState = 
        <EditCardForm 
          card = {this.props.selectedCard}
          onEditCard = {this.handleEditingCardInList}
        />
        buttonText = "Return to Card List"
      } else if(this.props.selectedCard != null){
        console.log("hello")
        currentlyVisibleState = 
        <CardDetail
          card = {this.props.selectedCard}
          onClickingDelete = {this.handleDeletingCard}
          onClickingEdit = {this.handleEditClick} 
        />
        buttonText = "Return to Card List"
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewCardForm  onNewCardCreation = {this.handleAddingNewCardToList} />;
        buttonText = "Return to Card List";
      } else {
        currentlyVisibleState= 
        <CardList 
          cardList = {this.props.masterCardList} 
          onCardSelection = {this.handleChangingSelectedCard}/>;
        buttonText = "Add Card";
      }
      return (
        <>
          {currentlyVisibleState}
          <button className="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
        </>
      );
    } 
  }
}

CardControl.propTypes = {
  masterCardList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedCard: PropTypes.object,
  editingVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterCardList: state.masterCardList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedCard: state.selectedCard,
    editingVisibleOnPage: state.editingVisibleOnPage
  }
}

CardControl = connect(mapStateToProps)(CardControl);

export default withFirestore(CardControl);