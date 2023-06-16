import "./App.css";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
