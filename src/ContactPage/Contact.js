import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contacts" id="section4">
        <div className="contactTitle">
          <h2 id="contactTitle">Want To Collaborate?</h2>
        </div>
        <main className="mainContact">
          <div className="contactDivs">
            <div className="contactIcon email"></div>
            <p>
              Email:{" "}
              <a href="mailto:lstobbart35@gmail.com">lstobbart35@gmail.com</a>
            </p>
          </div>
          <div className="contactDivs">
            <div className="contactIcon linkedin"></div>
            <p>
              Contact me via my{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/luke-stobbart-5919331b3/"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="contactDivs">
            <div className="contactIcon github"></div>
            <p>
              Want to collaborate on any of my current projects? Visit my{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LJS22"
              >
                Github
              </a>
            </p>
          </div>
        </main>
      </section>
    );
  }
}

export default Contact;
