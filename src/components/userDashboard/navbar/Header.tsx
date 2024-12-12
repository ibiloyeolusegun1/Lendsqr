import { IoSearchOutline } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";
import { RiArrowDownSFill } from "react-icons/ri";
import "../../../scss/components/_header.scss";

import logo from "../../../assets/logo.png";
import profile from "../../../assets/profile.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = (dropdown: boolean) => {
    setIsOpen((prev) => (prev === dropdown ? false : dropdown));
  };

  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="" className="logo" />
        <div className="search">
          <input type="search" placeholder="Search for anything" />
          <div className="icons">
            <IoSearchOutline size={22} />
          </div>
        </div>
        <div className="profile-container">
          <p className="docs">Docs</p>
          <TfiBell size={24} />
          <div className="profile">
            <img src={profile} alt="profile picture" />
            <div className="profile-dropdown">
              <p>Adedeji</p>
              <div
                onClick={() => toggleDropdown(true)}
                className="dropdown-icon"
              >
                <RiArrowDownSFill />
              </div>
              {isOpen && (
                <div className="dropdown-link">
                  <Link to="/" className="link">
                    Profile
                  </Link>
                  <Link to="/" className="link">
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
