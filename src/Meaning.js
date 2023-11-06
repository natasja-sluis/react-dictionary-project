import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
    </div>
  );
}
