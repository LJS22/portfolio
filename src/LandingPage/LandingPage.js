import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    landingPageClosed: false,
    landingPageDisappeared: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ landingPageClosed: true });
    }, 6500);
    setTimeout(() => {
      this.setState({ landingPageDisappeared: true });
    }, 8500);
  }

  render() {
    let className = "landingPage";
    if (this.state.landingPageClosed) {
      className = "landingPage closeLanding";
    }
    if (this.state.landingPageDisappeared) {
      className = "hidden";
    }
    return (
      <section className={className}>
        <div>
          <h1 className="h1animate">Hello,</h1>
          <h2 className="h2animate">I'm Luke</h2>
          <h4 className="h3animate">A junior software developer</h4>
        </div>
      </section>
    );
  }
}

export default LandingPage;
