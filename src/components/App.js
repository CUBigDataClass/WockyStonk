import Login from './Login/Login'; 
import DashBoard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <div> 
      <Switch>
        <Route path={"/"} exact component={Login} /> 
        <Route path={"/dashboard"} component={DashBoard} /> 
      </Switch>
      </div> 
    </Router> 
  );
}

export default App;
