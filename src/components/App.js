import React from 'react';
import '../stylesheets/App.scss';
import Collapsables from './Collapsables';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Collapsables />
      </div>
    );
  }
}

export default App;
