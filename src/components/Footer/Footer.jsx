import React, { useEffect } from "react";
import refreshIndex from "./IndexModule"; 
import "../styles/Footer.css";

//- Component Imports
import Ticker from "./Ticker";

//- Redux Imports
import { useSelector, useDispatch } from "react-redux";

function Footer(props) {

  useEffect(() => {
    console.log(refreshIndex()); 

  });
 
  //- gets access to redux state vars 
  const dow = useSelector((state) => state.dowIndex);
  const nasdaq = useSelector((state) => state.nasdaqIndex);
  const sp = useSelector((state) => state.spIndex);
  
  //- dispatch actions to update vars 
  const dispatch = useDispatch();

  

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


