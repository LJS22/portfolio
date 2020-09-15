import React, { Component } from "react";
import "./PageButton.css";

class PageButton extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 0;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  handleUp = () => {
    window.scrollBy({ top: -613.5, behavior: "smooth" });
  };

  handleDown = () => {
    window.scrollBy({ top: 613.5, behavior: "smooth" });
  };

  render() {
    return (
      <div
        className={this.state.scrolled ? "mainButton scrolled" : "mainButton"}
      >
        <div className="upButton" onClick={this.handleUp}></div>
        <div className="downButton" onClick={this.handleDown}></div>
      </div>
    );
  }
}

export default PageButton;
