import React from "react";

/* 
  This Component is purely for customizing, when they click on it call the props function 
  that will trigger the form submission 

  you pretty much just creating a manual form page
*/
class SubmitButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
        className={this.props.clName}
        onClick={this.props.submit}
      >
        {" "}
        {this.props.text}{" "}
      </button>
    );
  }
}

export default SubmitButton;
