import "./App.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Carusel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <div className="section1">
        <Header />
        <Slider />
      </div>
      <Carusel />
    </div>
  );
}

export default App;
