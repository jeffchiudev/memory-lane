import React from 'react';
import PropTypes from 'prop-types';

function Card(props){
  return (
    <>
      <div className="card" onClick= {() => props.whenCardClicked(props.id)}>
        <h2 className="card-title">{props.prompt}</h2>
        <p>{props.details}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  prompt: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCardClicked: PropTypes.func
};

export default Card;