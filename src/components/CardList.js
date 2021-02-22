import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function CardList(props){

  useFirestoreConnect([
    { collection: 'cards' }
  ]);

  const cards = useSelector(state => state.firestore.ordered.cards)

  if (isLoaded(cards)){
    return(
      <>
      { cards.map((card) => {
        return <Card
          whenCardClicked = {props.onCardSelection}
          prompt = {card.prompt}
          details = {card.details}
          id = {card.id}
          key = {card.id} />
      })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )    
  }
}

CardList.propTypes = {
  onCardSelection: PropTypes.func
};

export default CardList;