import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>hello</h1>
          <button>hello</button>
          <ul><li>hello</li></ul>
        </header>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
