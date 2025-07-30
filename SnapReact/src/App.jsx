import "./App.css";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
