import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    //API documentation: https://www.shecodes.io/learn/apis/dictionary//
    let apiKey = "af3dbobac9b3fdf4c1fdet0e9f0334ec";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              placeholder="Search English"
              type="search"
              onChange={handleKeywordChange}
              required
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
