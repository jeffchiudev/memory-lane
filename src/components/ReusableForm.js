import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit ={props.formSubmissionHandler}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="prompt" placeholder="Prompt" />
          <label htmlFor="prompt">Prompt</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="details" placeholder="Details" />
          <label htmlFor="details">Details</label>
        </div>
        <button className="btn btn-primary" type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;