import "./App.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Carusel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="section1" id="section1">
        <Header />
        <Slider />
      </div>
      <Carusel />
      <Footer />
    </div>
  );
}

export default App;
