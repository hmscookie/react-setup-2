import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//intro section of the page
class Skills extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick(event) {
    $(event.currentTarget).prev(".hidden").slideToggle('open');
    if ($(".hidden").hasClass('open')) {
      $(event.currentTarget).text('closed skills');
    } else {
      $(event.currentTarget).text('show all skills');
    }
  }

  render() {
    return (
       <section className="skills">
         <div className="container">
         <div className="spacing-2"></div>
          <h2 className="heading-2"><span className="lines">My Skills</span></h2>
          <div className="row icon-container">
            <div className="icon">
             <p className="visually-hidden">Javacript</p>
             </div>
            <div className="icon">
             <p className="visually-hidden">Javacript</p>
            </div>
            <div className="icon">
             <p className="visually-hidden">Javacript</p>
            </div>
            <div className="icon">
              <p className="visually-hidden">Javacript</p>
            </div>
           </div>

           <div className="row button-ctr">
             <div className="hidden icon-container">
                 <div className="icon-flex">
                  <div className="icon">
                    <p className="visually-hidden">Javacript</p>
                  </div>
                  <div className="icon">
                    <p className="visually-hidden">Javacript</p></div>
                  <div className="icon">
                    <p className="visually-hidden">Javacript</p>
                  </div>
                  <div className="icon">
                    <p className="visually-hidden">Javacript</p>
                  </div>
                </div>
              </div>
            <button className="button-1" onClick={event => this.handleClick(event)}>Show all skills</button>
          </div>
          <div className="spacing-2"></div>
        </div>
      </section>
    )
  }
}

export default Skills;
