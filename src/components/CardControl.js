import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import EditCardForm from './EditCardForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//put actions here
import { withFirestore } from 'react-redux-firebase';

class CardControl extends React.Component {
  //constructor

  handleClick = () => {
    if (this.props.selectedCard != null) {
      const {dispatch} = this.props;
      const action = {type: 'DESELECT_CARD'}
      dispatch(action);
      // const action2 = {type: 'TOGGLE_EDIT'}
      // dispatch(action2);
    } else {
      const {dispatch} = this.props
      const action = { type: 'TOGGLE_FORM'}
      dispatch(action);
    }
  }

  handleAddingNewCardToList = () => {
    const {dispatch} = this.props;
    const action = {type: 'TOGGLE_FORM'}
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewCardForm  onNewCardCreation = {this.handleAddingNewCardToList} />;
      buttonText = "Return to List";
    } else {
      currentlyVisibleState= <CardList cardList = {this.props.masterCardList} onCardSelection = {this.handleChangingSelectedCard}/>;
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

CardControl.propTypes = {
  masterCardList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterCardList: state.masterCardList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CardControl = connect(mapStateToProps)(CardControl);

export default withFirestore(CardControl);