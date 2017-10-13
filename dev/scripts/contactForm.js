import React from 'react';

const contactForm = (props) => {
	return (
    <section className="form">
      <div className="spacing"></div>
        <div className="container">
          <div className="row">
            <h2 className="heading-2">Looking for a developer?</h2>
            <p>Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreetLorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
          </div>

          <div className="row row-fields">

            <div className="name-email">
              <div className="name">
                <label className="heading-5" htmlFor="name">Name </label>
                <input
                  type="text"
                  id="name"
                  placeholder="First & last"
                  className="hello"
                />
              </div>


              <div className="email">
              <label className="heading-5" htmlFor="email-address">Email Address </label>
                <input
                  type="text"
                  id="email-address"
                  placeholder="Email Address"
                  className="hello"
                />
              </div>
            </div>

            <div className="message-container">
              <label className="heading-5" htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="message"
                className="hello"
              />
              <button className="button-1" type="submit">Submit</button>
            </div>

          </div>
        </div> {/*close*/}
      <div className="spacing"></div>
    </section>
	)
}

export default contactForm;
