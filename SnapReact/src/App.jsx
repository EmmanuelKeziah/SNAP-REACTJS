import "./App.css";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;