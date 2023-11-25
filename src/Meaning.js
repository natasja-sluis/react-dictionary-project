import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
    </div>
  );
}
