import React from 'react';

const Footer = (props) => {
	return (
    <footer className="footer">
    <div className="spacing-4"></div>
      <div className="container">
        <div className="row row-flex">

          <div className="left">
            <div className="logo"></div>
            <p className="body"> Connect With Me <br/> and Find Out More </p>
          </div>

          <div className="right">

            <div className="split-left">
              <p className="body"> E: hello @ sarahkarsh.com</p>
              <p className="body"> E: hello @ sarahkarsh.com</p>
            </div>

            <div className="split-right">
              <p className="body"> Follow Me</p>
              <p className="body"> LinkediIn SNAPCHAT CHATROULETTE</p>
            </div>

          </div>
          
        </div>
      </div>
      <div className="spacing"></div>
      <div className="spacing-4"></div>
    </footer>
	)
}

export default Footer;
