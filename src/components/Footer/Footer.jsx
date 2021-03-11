import React from "react";
import "../styles/Footer.css";
import data from "./mock";
import Ticker from "./Ticker";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickers: data
    };
  }
  render() {
    return (
      <div className="footer">
        <Ticker
          label={this.state.tickers[0].name}
          index={this.state.tickers[0].index}
          change={this.state.tickers[0].change}
        />
        <Ticker
          label={this.state.tickers[1].name}
          index={this.state.tickers[1].index}
          change={this.state.tickers[1].change}
        />
        <Ticker
          label={this.state.tickers[2].name}
          index={this.state.tickers[2].index}
          change={this.state.tickers[2].change}
        />
      </div>
    );
  }
}
export default Footer;
