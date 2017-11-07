import React from 'react';
import Rotate from 'react-reveal/Rotate'; 

const Copyblock1 = (props) => {
	return (
    <section className="copyblock1" id="aboutMe">
      <div className="container">
        <div className="row copy1-ctr">

          <div className="copy-left left-50">
            <Rotate bottom right delay={500}><h3 className="heading-2">Who is Sarah Karsh?</h3>
            <p className="body">I'm Sarah Karsh! A front end developer from Toronto. I am passionate about creating accessible website through an all human centered approach. </p></Rotate>

          </div>

          <div className="copy-right right-50">
            <Rotate bottom left delay={500}><h3 className="heading-2">What does she know?</h3>
            <p className="body">I know HTML5, CSS3, responsive design, JavaScript, jQuery, Wordpress, Visual Composer, PHP, React, Git, Gulp, and Web Accessiblity Standards. I'm also currently learning digital design and UX at HackerYou</p></Rotate>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
    </section>
	)
}

export default Copyblock1;
