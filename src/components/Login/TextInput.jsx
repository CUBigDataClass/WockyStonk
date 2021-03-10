import React from "react";
import "../styles/Login.css";
/* 
  onKeyboard change you need to call the props method so that you can update the 
  state value on the Login Root Component 
*/
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.keystroke}
      />
    );
  }
}
export default TextInput;
