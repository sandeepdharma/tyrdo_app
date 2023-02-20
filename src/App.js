import "./App.css";
import About from "./components/About/About";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import QuickIntro from "./components/QuickIntro/QuickIntro";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
  
      <Home />
      <About />
      <Service />
      <QuickIntro />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
