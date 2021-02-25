import React, { useState } from "react";
import firebase from "firebase/app";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from "react-router-dom";
import { withRouter, useHistory } from 'react-router-dom';

function Signin(){  
  const auth = useState(firebase.auth());
  const history = useHistory();
  // console.log(history)

  // console.log(auth[0].currentUser);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("sign-up successful");
    }).catch(function(error){
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      history.push("/");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      history.push("/");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  if((isLoaded(auth)) && (auth[0].currentUser == null)){
    return (
      <>
        <h1>Sign up</h1>
        <form onSubmit={doSignUp}>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email" />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password" />
          <button className="btn btn-light" type="submit">Sign up</button>
        </form>
        
        <h1>Sign in</h1>
        <form onSubmit={doSignIn}>
          <input
            className="form-control"
            type="text"
            name="signinEmail"
            placeholder="email"/>
          <input
            className="form-control"
            type="password"
            name="signinPassword"
            placeholder="Password"/>
          
            <button className="btn btn-light" type="submit">Sign in</button>
          
        </form>
        </>
      );
    }
  
  if ((isLoaded(auth)) && (auth[0].currentUser != null)) {
    return (
      <>
        <h1>Sign Out</h1>
        <button className="btn btn-light" onClick={doSignOut}>Sign out</button>
      </>
    );
  }
}

//   return (
//     <>
//       <h1>Sign up</h1>
//       <form onSubmit={doSignUp}>
//         <input
//           className="form-control"
//           type="text"
//           name="email"
//           placeholder="email" />
//         <input
//           className="form-control"
//           type="password"
//           name="password"
//           placeholder="password" />
//         <button className="btn btn-light" type="submit">Sign up</button>
//       </form>
      
//       <h1>Sign in</h1>
//       <form onSubmit={doSignIn}>
//         <input
//           className="form-control"
//           type="text"
//           name="signinEmail"
//           placeholder="email"/>
//         <input
//           className="form-control"
//           type="password"
//           name="signinPassword"
//           placeholder="Password"/>
//         <button className="btn btn-light" type="submit">Sign in</button>
//       </form>
//       <h1>Sign Out</h1>
//       <button className="btn btn-light" onClick={doSignOut}>Sign out</button>
//     </>
//   );
// }

// Signin.propTypes = {

// };

// const mapStateToProps = state => {
//   return {
    
//   }
// }

// Signin = connect(mapStateToProps)(Signin);

export default withRouter(Signin)