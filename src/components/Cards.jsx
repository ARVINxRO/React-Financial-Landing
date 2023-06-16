import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <section className="cards">
      <div className="cards-container">
        <div className="card">
          <img src={Single} alt="/" />
          <h2 className="c-title">Single User</h2>
          <p className="c-price">$149</p>
          <div className="card-details-container">
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2 GB</p>
          </div>
          <button className="c-btn">Start Trial</button>
        </div>
        {/* Card 2 */}
        <div className="card">
          <img src={Double} alt="/" />
          <h2 className="c-title">Double User</h2>
          <p className="c-price">$199</p>
          <div className="card-details-container">
            <p>1 TB Storage</p>
            <p>2 Granted User</p>
            <p>Send up to 8 GB</p>
          </div>
          <button className="c-btn">Start Trial</button>
        </div>
        {/* Card 3 */}
        <div className="card">
          <img src={Triple} alt="/" />
          <h2 className="c-title">Triple User</h2>
          <p className="c-price">$299</p>
          <div className="card-details-container">
            <p>3 TB Storage</p>
            <p>3 Granted User</p>
            <p>Send up to 128 GB</p>
          </div>
          <button className="c-btn">Start Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
