import React from "react";
import "../styles/Login.css";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
// Link component from react-router-dom

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    // bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyStroke = this.handleKeyStroke.bind(this);

    // state vars
    // will declare state var for the passwords and usernames
    // declare a submit handler function that you pass to the custom submit button component
    this.state = {
      email: "",
      password: ""
    };
  }

  // post this data through react-router-dom node js router to do the verification 
  // not sure if nodejs can call react-router-links
  // For now the button will just call the link to the dashboard
  handleSubmit() {
    console.log(this.state.email);
    console.log(this.state.password);  
  }

  handleRegister() {
    console.log("register button tapped");
  }

  // updates the state vars for password and username everytime its called
  handleKeyStroke(event) {
    const loc = event.target.type;

    if (loc === "email") {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  }

  render() {
    return (
      <div className="innerLoginContainer rounded">
        <section id="TitleSection " class="box1 title">
          Wocky Stonks
        </section>
        <section class="box2">
          <TextInput
            type="email"
            placeholder="Enter Email"
            keystroke={this.handleKeyStroke}
          />
          <TextInput
            type="password"
            placeholder="Enter Password"
            keystroke={this.handleKeyStroke}
          />
        </section>
        <section id="ButtonSection" class="box3">
          <SubmitButton
            text="Register"
            clName="submitRegister"
            submit={this.handleRegister}
          />
          <SubmitButton
            text="Submit"
            clName="submitButton"
            submit={this.handleSubmit}
          />
        </section>
      </div>
    );
  }
}

export default Login;
