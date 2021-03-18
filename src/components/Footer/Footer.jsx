import React, { useState } from "react";
import "../styles/Footer.css";

//- Component Imports
import data from "./mock";
import Ticker from "./Ticker";

//- Redux Imports
import { useSelector, useDispatch } from "react-redux";

//- Footer will just read off the values from the state, have something dispatch actions to update
//- the values of the each index 
function Footer(props) {
 
  const dispatch = useDispatch();
  const dow = useSelector((state) => state.dowIndex);
  const nasdaq = useSelector((state) => state.nasdaqIndex);
  const sp = useSelector((state) => state.spIndex);

  return (
    <div className="footer">
      <Ticker
        label={dow.name}
        index={dow.index}
        change={dow.change}
      />
      <Ticker
        label={nasdaq.name}
        index={nasdaq.index}
        change={nasdaq.change}
      />
      <Ticker
        label={sp.name}
        index={sp.index}
        change={sp.change}
      />
    </div>
  );
}
export default Footer;


