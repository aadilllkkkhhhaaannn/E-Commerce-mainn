import React from "react";

const Contactusform = () => {
  return (
    <>
      {/* <section id="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">City, State</span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:hitmeup@gmail.com" title="Send me an email">
                      hitmeup@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section> */}

      <div class="container-d">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
            <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <form action="#">
                <h2 class="lg-view">Contact</h2>
                <h2 class="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Contactusform;
