import React from "react"
import Container from "react-bootstrap/Container"

import LinkedIn from "../images/svg/linkedin.svg"
import Instagram from "../images/svg/instagram.svg"
import Facebook from "../images/svg/facebook.svg"

const Footer = () => (
  <>
    <Container>
      <footer>
        <div>
          <h1>
            Interested in <br /> working together?
          </h1>
          <div className="contact-information">
            <p>
              <a
                href="mailto:general@simplify-lgp.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                general@simplify-lgp.tech
              </a>
              &nbsp;
              <a href="tel:+351 910 651 413">+351 910 651 413</a>
            </p>

            <div className="social-links">
              <a href="https://facebook.com/">
                <Facebook />
              </a>

              <a href="https://instagram.com/">
                <Instagram />
              </a>

              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
    <div className="icon-credit">
      <Container>www.icons8.com</Container>
    </div>
  </>
)

export default Footer
