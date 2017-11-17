import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import ParticlesJS from './Particles.js';
import Zoom from 'react-reveal/Zoom'; 

//intro section of the page
class Intro extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div className="particles-container">
          <div className="row">

          <ParticlesJS />
          
           <div className="container top-section"> {/*opens top section*/}
              <div className="abs-cont">

                <div className="copy">
                  <Zoom><h2 className="heading-1"> Hello, I'm Sarah Karsh. </h2></Zoom>
                  <h3 className="heading-3">Toronto based front end developer, a11y advocate, life long learner, and something else.</h3>
                </div>

                <div className="img">
                  <img src="../images/sarah.jpg" />
                </div>

              </div>
            </div> 

        </div>
      </div>
    )
  }
}

export default Intro;
