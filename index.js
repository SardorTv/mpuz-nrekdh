import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header/>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
