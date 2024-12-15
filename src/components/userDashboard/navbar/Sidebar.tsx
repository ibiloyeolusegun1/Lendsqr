import { useState } from "react";
import { type Link } from "../../../utils/links";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../../../scss/components/_navbar.scss";

import briefcase from "../../../assets/briefcase.png";
import user from "../../../assets/user-friends.png";
import users from "../../../assets/users.png";
import sack from "../../../assets/sack.png";
import handshake from "../../../assets/handshake-regular.png";
import piggy from "../../../assets/piggy-bank.png";
import handloan from "../../../assets/Group.png";
import usercheck from "../../../assets/user-check.png";
import userkarma from "../../../assets/user-times.png";
import bank from "../../../assets/bank.png";
import coinsolid from "../../../assets/coins-solid.png";
import iconT from "../../../assets/icon.png";
import galaxy from "../../../assets/galaxy.png";
import usercog from "../../../assets/user-cog.png";
import scroll from "../../../assets/scroll.png";
import chartbar from "../../../assets/chart-bar.png";
import sliders from "../../../assets/sliders-h.png";
import badgePercent from "../../../assets/badge-percent.png";
import clipboard from "../../../assets/clipboard-list.png";
import home from "../../../assets/home.png";

export const linkCustomer: Link[] = [
  {
    href: "/dashboard",
    label: "Users",
    image: user,
    children: [
      { href: "/filter", label: "Filter" },
      { href: "/details", label: "Details" },
    ],
  },
  { href: "/", label: "Guarantors", image: users },
  { href: "/", label: "Loans", image: sack },
  { href: "/", label: "Decision Models", image: handshake },
  { href: "/", label: "Savings", image: piggy },
  { href: "/", label: "Loan Requests", image: handloan },
  { href: "/", label: "Whitelist", image: usercheck },
  { href: "/", label: "Karma", image: userkarma },
];
export const linkBusiness: Link[] = [
  { href: "/", label: "Organization", image: briefcase },
  { href: "/", label: "Loans Products", image: handloan },
  { href: "/", label: "Savings Products", image: bank },
  { href: "/", label: "Fees and Charges", image: coinsolid },
  { href: "/", label: "Transaction", image: iconT },
  { href: "/", label: "Services", image: galaxy },
  { href: "/", label: "Service Account", image: usercog },
  { href: "/", label: "Settlements", image: scroll },
  { href: "/", label: "Reports", image: chartbar },
];
export const linkSetting: Link[] = [
  { href: "/", label: "Preference", image: sliders },
  { href: "/", label: "Fees and Pricing", image: badgePercent },
  { href: "/", label: "Audit Log", image: clipboard },
];

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {isSidebarOpen ? (
        <button className="toggle-btn" onClick={toggleSidebar}>
          <IoIosArrowBack />
        </button>
      ) : (
        <button className="toggle-btn1" onClick={toggleSidebar}>
          <IoIosArrowForward />
        </button>
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-org">
          <img src={briefcase} alt="briefcase" />
          <p>Switch Organization</p>
          <RiArrowDownSLine />
        </div>
        <div className="sidebar-dash">
          <img src={home} alt="home" />
          <p>Dashboard</p>
        </div>
        <div className="sidebar-customer">
          <p>CUSTOMERS</p>
          <ul className="sidebar-ul">
            {linkCustomer.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `n-link ${isActive ? "active-link" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <div className="box"></div>}
                      <img src={item.image} alt={item.label} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-customer">
          <p>BUSINESS</p>
          <ul className="sidebar-ul">
            {linkBusiness.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href} className="n-link">
                  <img src={item.image} alt="" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-customer">
          <p>SETTINGS</p>
          <ul className="sidebar-ul">
            {linkSetting.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href} className="n-link">
                  <img src={item.image} alt="" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
