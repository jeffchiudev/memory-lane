import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditCardForm(props){

  const firestore = useFirestore();

  const { card, onEditCard } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard();
    const propertiesToUpdate = {
      prompt: event.target.prompt.value,
      details: event.target.details.value,
    }
    return firestore.update({collection:'cards', doc: card.id}, propertiesToUpdate)
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler = {handleEditCardFormSubmission}
        buttonText="Update Ticket"/>
    </>
  );
}

EditCardForm.propTypes = {
  onEditCard: PropTypes.func
};

export default EditCardForm;
