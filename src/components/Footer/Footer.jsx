import React, { useEffect } from "react";
import refreshIndex from "./IndexModule"; 
import "../styles/Footer.css";

//- Component Imports
import Ticker from "./Ticker";

//- Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { updateDOWIndex, updateNASIndex, updateSPIndex } from "../../redux/actions/footer/footerActions.js"

// almost done, its just refreshing at a rate way faster than 5 mintues...

function Footer(props) {
  //- gets access to redux state vars 
  const dow = useSelector((state) => state.dowIndex);
  const nasdaq = useSelector((state) => state.nasdaqIndex);
  const sp = useSelector((state) => state.spIndex);
  
  //- dispatch actions to update vars 
  const dispatch = useDispatch();

  function updateTickers() {
    const indicies = refreshIndex(); 
    const dow = indicies["DOW"]; 
    const sp = indicies["SP"]; 
    const nas = indicies["NAS"]; 

    dispatch(updateDOWIndex(dow));
    dispatch(updateSPIndex(nas));
    dispatch(updateNASIndex(sp));
  }

  //- gets executed once component is mounted
  useEffect(updateTickers, []);

  //- refresh module every 5 minutes
  setTimeout(updateTickers, 60000 * 5);

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