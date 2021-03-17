import React from "react";
import "../styles/table.css";

const icon =
  "https://img-premium.flaticon.com/svg/3916/3916869.svg?token=exp=1615910524~hmac=a71b42572d6f1f378dd73816bbb747e3";

function Cell(props) {

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
          <h4>Posted by {props.author}</h4>
          <span>{props.content}</span>
        </div>
      </section>
    </div>
  );
}

export default Cell;
