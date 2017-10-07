import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './intro.js';
import Copyblock1 from './copyblock1.js';
import Skills from './skills.js';
import PortfolioTop from './portfolioTop.js';

class App extends React.Component {
  render() {
    return (
      <div>
          <header>
            <nav>

              <ul className="heading-4">
                <div className="logo">
                </div>
                <div>
                  <li tabIndex="0">About Me</li>
                  <li tabIndex="0">My Work</li>
                  <li tabIndex="0">Contact Me</li>
                </div>
              </ul>
            </nav>

            <Intro />
            <h1 className="visually-hidden">Sarah Karsh porfolio site</h1>

          </header>
          <main>
            <Copyblock1 />

            <Skills />

            <PortfolioTop />
          </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
