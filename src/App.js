import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="Title">What word do you want to look up?</div>
        <Dictionary defaultKeyword="computer" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
