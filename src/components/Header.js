import { Link } from "react-router-dom";
import "./components.css";
import logo from "../assets/quizz.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <img className="logo" src={logo} alt={"logo"}></img>
        Trivia Quiz Hub
      </Link>
    </div>
  );
};

export default Header;