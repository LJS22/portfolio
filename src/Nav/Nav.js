import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleAboutScroll = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  handleProjectScroll = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  handleContactScroll = () => {
    window.scrollTo({ top: 1850, behavior: "smooth" });
  };

  render() {
    return (
      <div className={this.state.scrolled ? "navBar scrolled" : "navBar"}>
        <button onClick={this.handleAboutScroll}>About</button>
        <button onClick={this.handleProjectScroll}>Projects</button>
        <button onClick={this.handleContactScroll}>Get In Touch</button>
      </div>
    );
  }
}

export default Nav;
