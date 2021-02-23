import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewCardForm(props){

  const firestore = useFirestore();

  function addCardToFirestore(event){
    event.preventDefault();
    props.onNewCardCreation();

    return firestore.collection('cards').add(
      {
        prompt: event.target.prompt.value,
        details: event.target.details.value,
      }
    );
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={addCardToFirestore}
        buttonText="Submit" />
    </>
  );
}

NewCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
};

export default NewCardForm;