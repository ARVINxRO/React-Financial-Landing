import Typed from "react-typed";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <p className="hero-title">Growing with data analytics </p>
        <h1>grow with data</h1>
        <div className="hero-desc">
          <p>Fast , flexible financing for </p>
          <Typed
            className="hero-desc-type"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="hero-info">
          Monitor your data analytics to incrase revenue fot BTB, BTC & SASS
          platforms.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
