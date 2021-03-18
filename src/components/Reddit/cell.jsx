import React from "react";
import "../styles/table.css";

const icon =
  "https://s3-alpha-sig.figma.com/img/3084/e5ea/6c827e172f6f9871eb0708e08ee3ba87?Expires=1616371200&Signature=Tq4mA6HZnUKJKRkE0MHMocnHtvs15sviKJ6IUDmpU41gQ2RCzQIEyvn6GSViPZaqtqlP4qG0zKz~b~erTf1aT-Os7ykCs7BLbqR9l8E5OjbcWwm~b0VPoVQOB9NuOyEuyDLUfB~KW5eHKe-Mg6OpXtnQ77RdPeIh13QMryvEsccv57n4q-wfSPwMkuF0-4K5zrHVRNGRg6LEr~-jBEISl3LkE3omzT4891tLm1ABERMqroxVT4MlHvHKb2kRBXkvJ1-OEBgvpizRST5cPyF7CZpSfKdMCG9ryzwZGVWDqra4TQLUNmhdgxEZ7jjU6SsNsy~5gcDNLWq4EXZaZU9H8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

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
        <img src={icon} alt="icon" className="iconImage" />
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
