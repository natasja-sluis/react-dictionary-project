import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <h1 className="Title">Dictionary App</h1>
      <Dictionary />
      <footer className="Footer">
        coded by{" "}
        <a
          href="https://natasjasluis.netlify.app/"
          target="_blank"
          rel="noreferrer"
          class="link"
        >
          Natasja Sluis
        </a>{" "}
        <a
          href="https://github.com/Twesha33/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
          class="link"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
