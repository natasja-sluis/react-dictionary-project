import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="app">
        <h1 className="Title">Dictionary App</h1>
        <Dictionary />
      </div>
      <footer className="Footer">
        coded by{" "}
        <a
          href="https://natasjasluis.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Natasja Sluis
        </a>{" "}
        <a
          href="https://github.com/Twesha33/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
