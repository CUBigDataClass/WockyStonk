import React from "react";
import "../styles/Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom"; 

//- Components Imports
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import Footer from '../Footer/Footer'

//- Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { updateEmailTextField, updatePasswordTextField } from '../../redux/actions/login';

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const email = useSelector((state) => state.emailText);
  const password = useSelector((state) => state.passwordText);

  let credentials = {
    email, 
    password
  }

  //- INSERT USER INTO DB HERE 
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3030/register", {credentials})
      .then((res) => {
        let success = res.data.success; 
        console.log(success);

        //- Query db here for name, check for valid return

        //- If db insertion was successful then push them to dashboard
        if (success) {
          history.push('/dashboard', {creds: credentials});
        } else{
          console.log("Registration FAILED");
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
            <SubmitButton
              text="Sign Me up"
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

//- Link to how to fetch express server
//https://stackoverflow.com/questions/46867494/%C3%97-react-fetch-wont-hit-index-route-in-express-router
