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
            <Zoom><h2 className="heading-2"><span className="lines">My Work</span></h2></Zoom>
            <Zoom><p className="body hello">I've worked on numbers projects at work as part of the developmnet team, coding the front end of sites such as <a className="link-1" href="https://211ontario.ca/about-211-ontario/our-services-annual-report/2016-2017/" target="_blank">Ontario 211's 2017 annual report</a> and <a className="link-1" href="http://7words.biz/" target="_blank">Blueprint</a>. Projects that I completed at HackerYou can be found in my portfolio below.</p></Zoom>
            <div className="spacing-3"></div>
          </div>

          <div className="row">
            <a className="a-item" href="http://sarahkarsh.com/craftbeerpicker/" target="_blank" label="go to API portfolio piece">
              <div className="portfolio-container">

                <img className="image" alt="screenshot of a drunk dinosaur that wants you to take a quiz" src="/images/craft-brew.png" />

              <div className="view-live">
                <p className="heading-2">View live site</p>
              </div>

            </div>

            </a>
          </div>

          <div className="row">
            <div className="spacing-2"></div>
            <h3 className="heading-3">API Web App</h3>
            <Zoom><p className="hello body">Using the LCBO’s API, this site helps users pick a craft beer while delivering information about Toronto’s craft breweries.</p></Zoom>
            <div className="spacing-3"></div>
          </div>

        </div>
      </div>
    )
  }
}

export default PortfolioTop;
