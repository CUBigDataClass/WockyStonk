import React from "react";
import "./styles/Login.css";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";

/* This will all sit inside the predefined login container  */

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

  // figure out how to redirect this to express route
  handleSubmit() {
    // should be set at this point
    console.log(this.state.email);
    // should be set at this point
    console.log(this.state.password);
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
