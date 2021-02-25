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
        <div className="card" id="card-list-item" onClick= {() => props.whenCardClicked(randomCard.id)}>
          <h2>{randomCard.prompt}</h2>
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

RandomCard.propTypes = {
  whenCardClicked: PropTypes.func,
  prompt: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  id: PropTypes.string,
}

export default RandomCard;