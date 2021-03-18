import Login from './components/Login/Login'; 
import Register from './components/Login/Register';
import DashBoard from './components/Dashboard/Dashboard';
import './components/styles/Login.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Entry() {
  return (
      <Router> 
        <div> 
        <Switch>
          <Route path={"/"} exact component={Login} /> 
          <Route path={"/dashboard"} component={DashBoard} /> 
          <Route path={"/register"} component={Register} /> 
        </Switch>
        </div> 
      </Router> 
  );
}

export default Entry;