import "./App.css";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";
import OnClick from "./components/hero/OnClick.jsx";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <Hero />
      <OnClick />
      <Footer />
    </div>
  );
};

export default App;
