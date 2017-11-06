import React from 'react';

const Copyblock1 = (props) => {
	return (
    <section className="copyblock1" id="aboutMe">
      <div className="container">
        <div className="row copy1-ctr">

          <div className="copy-left left-50">
            <h3 className="heading-2">Who is Sarah Karsh?</h3>
            <p className="body">I'm Sarah Karsh! A front end developer from Toronto. I am passionate about creating accessible website through a human centered approach. </p>
          </div>

          <div className="copy-right right-50">
            <h3 className="heading-2">What does she know?</h3>
            <p className="body">I know HTML5, CSS3, responsive design, JavaScript, jQuery, Wordpress, Visual Composer, PHP, React, Git, Gulp, Web Accessiblity Standards and UX.</p>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
    </section>
	)
}

export default Copyblock1;
