import React from 'react';
import Zoom from 'react-reveal/Zoom'; 

const Copyblock1 = (props) => {
	return (
    <section className="copyblock1" id="aboutMe">
      <div className="container">
        <div className="row copy1-ctr">

          <div className="copy-left left-50">
            <Zoom><h3 className="heading-2">Who is Sarah Karsh?</h3>
            <p className="body">I'm Sarah Karsh! A front end developer from Toronto. I am passionate about creating accessible website through an all human centered approach. </p></Zoom>

          </div>

          <div className="copy-right right-50">
            <Zoom><h3 className="heading-2">What does she know?</h3>
            <p className="body">I know HTML5, CSS3, responsive design, JavaScript, jQuery, Wordpress, Visual Composer, PHP, React, Git, Gulp, Adobe Illustrator, Sketch, and Web Accessiblity Standards. I'm currently learning digital design and UX at HackerYou.</p></Zoom>
          </div>
        </div>
      </div>
      <div className="spacing-3"></div>
    </section>
	)
}

export default Copyblock1;
