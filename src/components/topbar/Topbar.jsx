import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            jery.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+56 9 8839 6150</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jaimee.rojas@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
