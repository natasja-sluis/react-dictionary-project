import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h2 className="word">{props.results.word}</h2>
          <h3 className="phonetic">{props.results.phonetic}</h3>
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meaning meaning={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
