import React, { setState } from "react";

class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      increase: true
    };
  }

  /* Set the color of the percent span based on last price */
  render() {
    return (
      <div className="box input-text;">
        <section className="titlePosition text-style"> {this.props.label} </section>
        <section className="description">
          <span className="index"> {this.props.index} </span>
          <span
            style={
              this.state.increase ? { color: "greenyellow" } : { color: "red" }
            }
          >
            {this.props.change}%{" "}
          </span>
        </section>
      </div>
    );
  }
}

export default Ticker;
