import React from "react";

export default function Film(props) {
  return (
    <div>
      <div className="Film">
        <h2>{props.title}</h2>
        <p>{props.year}</p>
        <img alt="movie_image" src={props.img} />
      </div>
    </div>
  );
}
