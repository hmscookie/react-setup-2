import React from 'react';
import {render} from 'react-dom';

//Main portfolio
class PortfolioSection extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div className="portfolio-section">

            <a href={this.props.href} target="_blank" label="go to portfolio piece">
              <div className="portfolio-container">

                <img className="image" alt={this.props.alt} src={this.props.src}/>
              <div className="view-live">
                <p className="heading-2">View live site</p>
              </div>

            </div>

            </a>

          <div className="row"> {/*top blurb*/}
            <div className="spacing-2"></div>
            <h3 className="heading-3">{this.props.headingTitle}</h3>
            <p className="body">{this.props.blurb}</p>
            <div className="spacing-3"></div>
          </div>

      </div>
    )
  }
}

export default PortfolioSection;
