import React from 'react';
import {render} from 'react-dom';
import Zoom from 'react-reveal/Zoom'; 


//Main portfolio
class PortfolioTop extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div className="portfolio-top" id="myWork">
         <div className="container">

          <div className="row"> {/*top blurb*/}
            <div className="spacing-3"></div>
            <Zoom delay={500}><h2 className="heading-2"><span className="lines">My Work</span></h2></Zoom>
            <Zoom delay={1000}><p className="body">Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet</p></Zoom>
            <div className="spacing-3"></div>
          </div>

          <div className="row">
            <a href="#" label="go to portfolio piece">
              <div className="portfolio-container">

                <img className="image" src="../images/tattoo.jpg" />

              <div className="view-live">
                <p className="heading-2">View live site</p>
              </div>

            </div>

            </a>
          </div>

          <div className="row">
            <div className="spacing-2"></div>
            <h3 className="heading-3">Custom Wordpress Site</h3>
            <p className="body">Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
            <div className="spacing-3"></div>
          </div>

        </div>
      </div>
    )
  }
}

export default PortfolioTop;
