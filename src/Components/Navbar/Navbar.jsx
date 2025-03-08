import { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

export default function Navbar() {
  const [menu, setmenu] = useState("home");

  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className="navbar">
      <h1>Rajkumar</h1>
      <img src={menu_open} onClick={openMenu} alt="logo" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
         <a href="\"> <p>Home</p></a>
        </li>
        <li>
          <a href="#about"><p>About Me</p></a>
        </li>
        <li>
          <a href="#services"><p>Services</p></a>
        </li>
        <li>
          <a href="#project"><p>Project</p></a>
        </li>
        <li>
          <a href="#contact"><p>Contact us</p></a>
        </li>
      </ul>
      <a href="#contact"><div className="nav-connect">Connect With me</div></a>
      
    </div>
  );
}
