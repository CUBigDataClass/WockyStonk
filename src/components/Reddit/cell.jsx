import React from "react";
import "../styles/Reddit.css";

//- Where you left off,

const icon =
  "https://img-premium.flaticon.com/svg/3916/3916869.svg?token=exp=1615910524~hmac=a71b42572d6f1f378dd73816bbb747e3";

var mockData = {
  author: "glasssofwater",
  title: "What dorms should I apply for?",
  subreddit: "r/cuboulder",
  content:
    "I will be a first year, in-state student going into pre-engineering. I'm not much of a partier, but I want to have a decent number of close friends who I can hang out with. I've been looking at Kittredge and WillVille a lot, but I want to hear others' opinions. I'm wanting a quieter environment, but still one that has a decent social situation. From what I've heard, the engineering quad isn't the best place to dorm.",
  urlLink:
    "https://www.reddit.com/r/cuboulder/comments/m5wag3/what_dorms_should_i_apply_for/"
};

function Cell(props) {
  //- directs to reddit page
  //- should have access to the url from props
  function handleClick(event) {
    window.open(mockData.urlLink, "_blank");
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
          <h1>{mockData.subreddit}/</h1>
          <h1>{mockData.title}</h1>
        </div>
        <div className="body">
          <h3>Author: {mockData.author}</h3>
          <span style={{ fontSize: "1.2em" }}>{mockData.content}</span>
        </div>
      </section>
    </div>
  );
}

export default Cell;