import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditCardForm(props){
  const firestore = useFirestore();
  const { card } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard();
    const propertiesToUpdate = {
      prompt: event.target.prompt.value,
      details: event.target.details.value,
    }
    return firestore.collection('cards').doc(id).update(propertiesToUpdate)
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
  onEditTicket: PropTypes.func
};

export default EditCardForm;
