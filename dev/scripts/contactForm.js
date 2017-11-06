import React from 'react';


const contactForm = (props) => {
	return (
    <section className="form" id="contactMe">
      <div className="spacing"></div>
        <div className="container">
          <div className="row">
            <h2 className="heading-2">Looking for a developer?</h2>
            <p>Lorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreetLorem Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
          </div>

          <form action="http://www.focuspocus.io/magic/hello@sarahkarsh.com" method="POST">

            <div className="row row-fields">

              <div className="name-email">
                <div className="name">
                  <label className="heading-5" htmlFor="name">Name * </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="First & last"
                    className="hello"
                    required
                  />
                </div>


                <div className="email">
                <label className="heading-5" htmlFor="email-address">Email Address * <span>required field</span></label>
                  <input
                    type="text"
                    id="email-address"
                    placeholder="Email Address"
                    className="hello"
                    required
                  />
                </div>
              </div>

              <div className="message-container">
                <label className="heading-5" htmlFor="message">Message *</label>
                <textarea
                  type="text"
                  id="message"
                  placeholder="message"
                  className="hello"
                  required
                />
                <button className="button-1" type="submit">Submit</button>
              </div>

            </div>

          </form>

        </div> {/*close*/}
      <div className="spacing"></div>
    </section>
	)
}

export default contactForm;
