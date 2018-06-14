import React, { Component } from 'react';
import Buttons from './Components/buttons';
import Folders from './Components/folders';
import SubBar from './Components/appbar';
import Typo from './Components/typo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SubBar />
        <Typo />
        <Buttons />
        <Folders />
      </div>
    );
  }
}

export default App;
