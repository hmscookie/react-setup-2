import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//intro section of the page
class Skills extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick(event) {
    $(event.currentTarget).prev(".hidden").slideToggle('open').toggleClass('text');
    if ($(".hidden").hasClass('text')) {
      $(event.currentTarget).text('Close Skills');
    } else {
      $(event.currentTarget).text('View All Skills');
    }
  }

  render() {
    return (
       <section className="skills">
         <div className="container">
         <div className="spacing-2"></div>
          <h2 className="heading-2"><span className="lines">My Skills</span></h2>
          <div className="row icon-container">
            <div className="icon js">
             <p className="visually-hidden">Javacript</p>
             </div>
            <div className="icon scss">
             <p className="visually-hidden">sass</p>
            </div>
            <div className="icon react">
             <p className="visually-hidden">react</p>
            </div>
            <div className="icon wordpress">
              <p className="visually-hidden">wordpress</p>
            </div>
           </div>

           <div className="row button-ctr">
             <div className="hidden icon-container">
                 <div className="icon-flex">
                  <div className="icon html">
                    <p className="visually-hidden">h.t.m.l.</p>
                  </div>
                  <div className="icon git">
                    <p className="visually-hidden">git</p></div>
                  <div className="icon css">
                    <p className="visually-hidden">C.s.s.</p>
                  </div>
                  <div className="icon ai">
                    <p className="visually-hidden">adobe illustator</p>
                  </div>
                </div>
              </div>
            <button className="button-1" onClick={event => this.handleClick(event)}>Show All Skills</button>
          </div>
          <div className="spacing-2"></div>
        </div>
      </section>
    )
  }
}

export default Skills;
