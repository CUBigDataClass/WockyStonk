import React, { useState } from "react";
import "../styles/Footer.css";
import data from "./mock";
import Ticker from "./Ticker";

function Footer(props) {
  
  const [tickers, updateTickers] = useState(data); 

  return (
    <div className="footer">
      <Ticker
        label={tickers[0].name}
        index={tickers[0].index}
        change={tickers[0].change}
      />
      <Ticker
        label={tickers[1].name}
        index={tickers[1].index}
        change={tickers[1].change}
      />
      <Ticker
        label={tickers[2].name}
        index={tickers[2].index}
        change={tickers[2].change}
      />
    </div>
  );
}
export default Footer;


