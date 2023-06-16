import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="navbar">
      <h1 className="nav-logo">REACT.</h1>
      <ul className="nav-list">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-menue" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div className={nav ? "nav-list-mobile" : "nav-list-mobile-close"}>
        <h1 className="nav-logo mobile-logo ">REACT.</h1>
        <ul>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
