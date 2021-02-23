import React from "react";
import PropTypes from "prop-types";

function CardDetail(props){
  const { card, onClickingDelete } = props;

  return (
    <>
      <h1>Card Details:</h1>
      <h3>{card.prompt} | {card.details}</h3>
      <button className="btn btn-secondary" onClick={ props.onClickingEdit }>Update card</button>
      <button className="btn btn-secondary" onClick={() => onClickingDelete(card.id)}>Delete Card</button>
    </>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CardDetail;