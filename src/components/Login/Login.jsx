import React from "react";
import { Link, useHistory } from "react-router-dom"; 
import "../styles/Login.css";
import axios from 'axios'

//- Components Imports
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import Footer from '../Footer/Footer'

//- Redux Imports
import { useSelector, useDispatch } from "react-redux";
import updateEmailTextField ,{updatePasswordTextField} from '../../redux/actions/login';

const axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const email = useSelector((state) => state.emailText);
  const password = useSelector((state) => state.passwordText);

  let credentials = {
    email, 
    password
  }

  //- Basic Authentication: Will route if back-end tells us if they are in
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3030/", {credentials}, axiosConfig)
      .then((res) => {
        let found = res.data.isUser; 
        console.log(found);

        //- Hit the DB here and check for a valid return 

        if (found) {
          history.push('/dashboard', {creds: credentials});
        } else{
          console.log("USER NOT IN OUR SYSTEM");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleKeyStroke(event) {
    const loc = event.target.type;
    const value = event.target.value; 
    
    if (loc === "email") {
      dispatch(updateEmailTextField(value));
    } else {
      dispatch(updatePasswordTextField(value));
    }
  }

  return (
    <div>
      <BackgroundOverlay />
      <Grid />
      <div className="loginContainer rounded">
        <div className="innerLoginContainer rounded">
          <section id="TitleSection " className="box1 titleLogo">
            Wocky Stonks
          </section>
          <section className="box2">
            <TextInput
              type="email"
              placeholder="Enter Email"
              keystroke={handleKeyStroke}
            />
            <TextInput
              type="password"
              placeholder="Enter Password"
              keystroke={handleKeyStroke}
            />
          </section>
          <section id="ButtonSection" className="box3">
            <Link to={"/register"}>
              <SubmitButton
                text="Register"
                clName="submitRegister"
              />
            </Link>
            <SubmitButton
              text="Submit"
              clName="submitButton"
              submit={handleSubmit}
            />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;

//- Link to how to fetch express server requests 
//https://stackoverflow.com/questions/46867494/%C3%97-react-fetch-wont-hit-index-route-in-express-router