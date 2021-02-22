import React from 'react';
import Header from './Header';
import CardControl from './CardControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <CardControl/>
      </div>
    </React.Fragment>
  );
}

export default App;
