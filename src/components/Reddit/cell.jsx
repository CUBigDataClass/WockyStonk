import React from "react";
import "./styles/table.css";

//- Where you left off,

const icon =
  "https://img-premium.flaticon.com/svg/3916/3916869.svg?token=exp=1615910524~hmac=a71b42572d6f1f378dd73816bbb747e3";

function Cell(props) {
  //- directs to reddit page
  //- should have access to the url from props
  function handleClick(event) {
    window.open(props.urlLink, "_blank");
  }

  return (
    <div
      onClick={handleClick}
      className="cellContainer input-text"
      style={{ backgroundColor: "white" }}
    >
      <section className="iconContainer">
        <img src={icon} alt="profilepic" className="iconImage" />
      </section>

      <section className="contentContainer">
        <div className="heading">
          <h1>{props.subreddit}/</h1>
          <h1>{props.title}</h1>
        </div>
        <div className="body">
          <h3>Author: {props.author}</h3>
          <span style={{ fontSize: "1.2em" }}>{props.content}</span>
        </div>
      </section>
    </div>
  );
}

export default Cell;
