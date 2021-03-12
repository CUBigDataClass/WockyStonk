import React,{useState} from "react";
import "../styles/Login.css";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import Footer from '../Footer/Footer'
import {Link, useHistory } from "react-router-dom"; 

function Login(props) {

  // state vars
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  //- INSERT USER INTO DB HERE 
  function handleSubmit() {
    // if in system then return 

    // create account, then push them to the dashboard with their basic information 
    console.log(credentials);
    history.push('/dashboard', {creds: credentials});
  }

  function handleKeyStroke(event) {
    const loc = event.target.type;
    const value = event.target.value; 

    console.log(value);
    console.log(loc);
    if (loc === "email") {
      setCredentials( (prev) => {
        return {
          email: value, 
          password: prev.password
        }
      });
    } else {
      setCredentials( (prev) => {
        return {
          email: prev.email, 
          password: value
        }
      });
    }
  }

  return (
    <div>
      <BackgroundOverlay />
      <Grid />
      <div className="loginContainer rounded">
        <div className="innerLoginContainer rounded">
          <section id="TitleSection " class="box1 titleLogo">
            Wocky Stonks
          </section>
          <section class="box2">
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
          <section id="ButtonSection" class="box3">
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
