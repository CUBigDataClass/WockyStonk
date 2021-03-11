import Login from './Login/Login'; 
import Register from './Login/Register';
import DashBoard from './Dashboard/Dashboard';
import './styles/Login.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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

export default App;
