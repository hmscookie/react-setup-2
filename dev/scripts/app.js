import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './intro.js';
import Copyblock1 from './copyblock1.js';
import Skills from './skills.js';
import PortfolioTop from './portfolioTop.js';
import PortfolioSection from './portfolioSection.js';
import ContactForm from './contactForm.js';
import Footer from './footer.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
            <nav>

              <ul className="heading-4">
                <div className="logo">
                </div>
                <div>
                  <li><AnchorLink href='#aboutMe'>About Me</AnchorLink></li>
                  <li><AnchorLink href='#myWork'>My Work</AnchorLink></li>
                  <li><AnchorLink href='#contactMe'>Contact Me</AnchorLink></li>
                </div>
              </ul>
            </nav>

            <Intro />
            <h1 className="visually-hidden">Sarah Karsh porfolio site</h1>

          </header>
          <main>
            <Copyblock1 />

            <Skills />

            <PortfolioTop />

              <div className="container">
                <div className="row">
                  <div className="portfolioFlex">
                    <PortfolioSection
                      headingTitle={"Hello my name is Sarah"}
                      blurb={"Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet "}
                    />
                    <PortfolioSection
                      headingTitle={"Hello my name is Sarah"}
                      blurb={"Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet "}
                    />
                    <PortfolioSection
                      headingTitle={"Hello my name is Sarah"}
                      blurb={"Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet "}
                    />
                    <PortfolioSection
                      headingTitle={"Hello my name is Sarah"}
                      blurb={"Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet "}
                    />
                  </div>
                </div>
              </div>

              <ContactForm />

              <Footer />

          </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
