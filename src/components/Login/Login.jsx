import React,{useState} from "react";
import {Link, useHistory } from "react-router-dom"; 
import "../styles/Login.css";
import axios from 'axios'

import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import Footer from '../Footer/Footer'

function Login(props) {
  // state vars
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  //- PLACE AUTHENTICATION CODE IN HERE 
  function handleSubmit() {
    history.push('/dashboard', {creds: credentials});

    axios
      .get("http://localhost:3030/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleKeyStroke(event) {
    const loc = event.target.type;
    const value = event.target.value; 

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