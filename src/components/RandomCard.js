import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function RandomCard(props){
  useFirestoreConnect([
    { collection: 'cards' }
  ]);
  // const {card} = props;

  const cards = useSelector(state => state.firestore.ordered.cards)
  // console.log(cards)
  //console.log(cards[])
  // randomIndex = Math.floor(Math.random() * cards.length)

  if (isLoaded(cards)){
    let randomIndex = Math.floor(Math.random() * cards.length)
    let randomCard = cards[randomIndex];
    console.log(randomIndex)
    console.log(cards[randomIndex])
    return(
      <>
        <div className = "card">
          <h2>{randomCard.prompt}</h2>
          <h2>{randomCard.details}</h2>
        </div>
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

export default RandomCard;