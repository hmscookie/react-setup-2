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
              <div className="logo"></div>
              <div>
                <li><AnchorLink offset='59' href='#aboutMe'>About Me</AnchorLink></li>
                <li><AnchorLink offset='59' href='#myWork'>My Work</AnchorLink></li>
                <li><AnchorLink offset='59' href='#contactMe'>Contact Me</AnchorLink></li>
              </div>
            </ul>
          </nav>
        </header>

        <Intro />
        <h1 className="visually-hidden">Sarah Karsh's porfolio site</h1>

          <main>
            <Copyblock1 />

            <Skills />

            <PortfolioTop />

              <div className="container">
                <div className="row">
                  <div className="portfolioFlex">
                  
                    <PortfolioSection
                      headingTitle={"Custom WordPress Site"}
                      blurb={"Using the LCBO’s API, I coded this site to help users pick a craft beer while delivering information about Toronto’s craft breweries."}
                      src={"/images/craft-brew.png"}
                      alt={"screenshot of a drunk dinosaur that wants you to take a quiz."}
                      href={"http://sarahkarsh.com/craftbeerpicker/"}
                    />
                    <PortfolioSection
                      headingTitle={"2016-2017 Portfolio Site"}
                      blurb={"My 2017 personal site, a single page responsive website, was made with HTML and CSS best practices in mind."}
                      src={"/images/sarah-2017.png"}
                      alt={"A screenshot of my old site it sort of looks like a site made for pampers. "}
                      href={"http://sarahkarsh.com/personalsite2017"}
                    />

                     <PortfolioSection
                      headingTitle={"Custom WordPress Site"}
                      blurb={"This site was coded as a solo project to learn wordpress. I'm using custom fields, which makes editing content in the CMS simple and quick for the user. This site is also fully responsive (mobile-friendly!) and accessible."}
                      src={"/images/everywhere.png"}
                      alt={"A screenshot of everywhere. Logo in the middle of the page and misty trees behind it."}
                      href={"http://sarahkarsh.com/everywhere/"}
                    />
                     <PortfolioSection
                      headingTitle={"Movie Poster Design"}
                      blurb={"I designed this movie poster for my HackerYou design course using AI. The goal of of the project was to learn some of the tools, use custom grids to layout the content."}
                      src={"/images/princess-mono1.png"}
                      alt={"A screenshot of everywhere. Logo in the middle of the page and misty trees behind it."}
                      href={"http://sarahkarsh.com/images/princess-mono.png"}
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
