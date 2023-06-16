const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="news-container">
        <div className="news-sec1">
          <h1>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="news-sec2">
          <form className="news-form">
            <input type="email" placeholder="Enter Email" />
            <button>Submit</button>
          </form>
          <p>
            We care about the protection of your data. Read our
            <a href="#"> Privacy Policy.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
