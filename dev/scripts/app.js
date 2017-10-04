import React from 'react';
import ReactDOM from 'react-dom';
import ParticlesJS from './Particles.js';

class App extends React.Component {
  render() {
    return (
      <div>
          <header>
            <nav>

              <ul>
                <div className="logo">
                </div>
                <div>
                  <li>About Me</li>
                  <li>My Work</li>
                  <li>Contact Me</li>
                </div>
              </ul>
            </nav>
            <div className="particles-container">
              <ParticlesJS />
              <div className="container top-section">
              <div className="abs-cont">
                <h2 className="copy"> Hello! Im sarah<span>Toronto based front end developer, teacher, gamer</span></h2>
                <div className="img">
                  <img src="../images/tattoo.jpg" />
                </div>
              </div>
            </div>
            </div>
            <h1 className="visually-hidden">Sarah Karsh porfolio site</h1>


          </header>
          <main>
            <h1 className="heading-1">hello</h1>
            <h2 className="heading-2">hello</h2>
            <h3 className="heading-3">hello</h3>
            <h4 className="body">hello</h4>
          </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
