import React from 'react';

const Footer = (props) => {
	return (
    <footer className="footer">
    <div className="spacing-3"></div>
      <div className="container">
        <div className="row row-flex">

          <div className="left">
            <p className="body"> Connect With Me <br/> and Find Out More </p>
          </div>

          <div className="right">

            <div className="split-left">
              <p className="body"> Email Address</p>
              <p className="body"> E: hello @ sarahkarsh.com</p>
            </div>

            <div className="split-right">
              <p className="body"> Follow Me</p>
              <p className="body"> 
                <a className="link-1" href="https://www.linkedin.com/in/sarah-karsh-5915b770/" target="_blank">LinkedIn</a> 
                <a className="link-1" href="https://github.com/hmscookie" target="_blank">Github</a>
              </p>

            </div>

          </div>
          
        </div>
      </div>
      <div className="spacing-3"></div>
    </footer>
	)
}

export default Footer;
