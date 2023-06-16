import Laptop from "../assets/Laptop.jpg";
const Analytics = () => {
  return (
    <section className="analytics">
      <div className="analytics-container">
        <img src={Laptop} alt="/" />
        <div className="analytics-desc">
          <p className="a-title">DATA ANALYTICS DASHBOARD</p>
          <h1 className="a-header">MANAGE DATA ANALYTICS CENTRALLY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            quidem culpa id illum nisi perspiciatis rerum error provident. Nemo
            adipisci in soluta? Sapiente iusto est veniam obcaecati earum facere
            illum!adipisci in soluta? Sapiente iusto est veniam obcaecati earum
            facere illum!
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
