import Login from './Login/Login'; 
import Register from './Login/Register';
import DashBoard from './Dashboard/Dashboard';
import './styles/Login.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'

function Entry() {
  return (
    <Provider>
      <Router> 
        <div> 
        <Switch>
          <Route path={"/"} exact component={Login} /> 
          <Route path={"/dashboard"} component={DashBoard} /> 
          <Route path={"/register"} component={Register} /> 
        </Switch>
        </div> 
      </Router> 
    </Provider>
  );
}

export default Entry;