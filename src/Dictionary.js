import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    const dictionaryData = response.data;
    if (dictionaryData.status === "not_found") {
      return;
    }
    setResults(dictionaryData);
  }

  function handlePexelsResponse(response) {
    return setPhotos(response.data.photos);
  }

  function search() {
    //API documentation: https://www.shecodes.io/learn/apis/dictionary//
    const dictionaryApiKey = "af3dbobac9b3fdf4c1fdet0e9f0334ec";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    //https://www.shecodes.io/learn/apis/images//
    const photosApiKey = "af3dbobac9b3fdf4c1fdet0e9f0334ec";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;

    axios.get(photosApiUrl).then(handlePexelsResponse);
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
              defaultValue={props.defaultKeyword}
              placeholder="Search English"
              type="search"
              onChange={handleKeywordChange}
              required
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
