import React from 'react';
import {render} from 'react-dom';

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
            <h2 className="heading-2"><span className="lines">My Work</span></h2>
            <p className="body hello">I've worked on numbers projects at work as part of the developmnet team, coding the front end of sites such as <a className="link-1" href="https://211ontario.ca/about-211-ontario/our-services-annual-report/2016-2017/" target="_blank">Ontario 211's 2017 annual report</a> and <a className="link-1" href="http://7words.biz/" target="_blank">Blueprint</a>. Projects that I completed at HackerYou can be found in my portfolio below.</p>
            <div className="spacing-3"></div>
          </div>

        </div>
      </div>
    )
  }
}

export default PortfolioTop;
