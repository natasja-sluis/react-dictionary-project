import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h2 className="word">{props.results.word}</h2>
        <h3 className="phonetic">{props.results.phonetic}</h3>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
