import React from "react";

class Ticker extends React.Component {
  constructor(props) {
    super(props);
  }

  // get into redux store for the last price, and see if the percent change is negative 
  render() {
    return (
      <div className="box input-text;">
        <section className="titlePosition text-style"> {this.props.label} </section>
        <section className="description">
          <span className="index"> {this.props.index} </span>
          <span
            style={
              this.props.change >= 0 ? { color: "#00FF00" } : { color: "red" }
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