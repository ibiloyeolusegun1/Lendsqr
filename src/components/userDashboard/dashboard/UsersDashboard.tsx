

import { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { dashboardUserData } from "../../../data/data";
import "../../../scss/components/_dashboard.scss";
import { DashboardUserInterface } from "../../../utils/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { Link } from "react-router-dom";

import viewIMG from "../../../assets/ellipse-eye.png";
import blacklistIMG from "../../../assets/ellipse-userX.png";
import activateIMG from "../../../assets/ellipse-user-mark.png";



interface User {
  date: string;
  name: string;
  image: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "pending" | "blacklist";
  organization: string;
  id: string;
  uid: string
}

function UsersDashboard() {
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const [organizationOptions, setOrganizationOptions] = useState<string[]>([]);
  const [statusOptions, setStatusOptions] = useState<string[]>([]);

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [organiztion, setOrganiztion] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  


// Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://6759cad4099e3090dbe2f1f3.mockapi.io/users"
        );
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Fetch organization options
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await axios.get<User[]>("https://6759cad4099e3090dbe2f1f3.mockapi.io/users");
        console.log(res.data);
        const organizations = res.data.map((user) => user.organization); 
        setOrganizationOptions(Array.from(new Set(organizations))); 
      } catch (error) {
        console.error("Error fetching organization options", error);
      }
    };
    fetchOrganizations();
  }, []);
  

  // Fetch status options
  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const res = await axios.get<User[]>("https://6759cad4099e3090dbe2f1f3.mockapi.io/users"); 
        console.log(res.data);
        const organizations = res.data.map((user) => user.status); 
        setStatusOptions(Array.from(new Set(organizations))); 
      } catch (error) {
        console.error("Error fetching status options", error);
      }
    };
    fetchStatuses();
  }, []);

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentUsers = data.slice(indexOfFirstPage, indexOfLastPage);

  const totalPage = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const toggleDropdown = (id: number) => {
    setIsOpenDropdown(isOpenDropdown === id ? null : id);
  };
 
  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
  };
  

  


  const renderPageNumbers = (): ReactNode[] => {
    const pageNumbers = [];
    const dots = <span style={{ padding: "1px", color: "#999", fontSize: "1.3rem", marginTop: "-4px" }}>...</span>;
  
    if (totalPage <= 7) {
      // If total pages are 7 or less, show all pages
      for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 4) {
        // Display first pages, then dots, and last two pages
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(dots);
        pageNumbers.push(
          <button key={totalPage - 1} onClick={() => handlePageChange(totalPage - 1)}>
            {totalPage - 1}
          </button>
        );
        pageNumbers.push(
          <button key={totalPage} onClick={() => handlePageChange(totalPage)}>
            {totalPage}
          </button>
        );
      } else if (currentPage >= totalPage - 3) {
        // Display first two pages, dots, and last pages
        pageNumbers.push(
          <button key={1} onClick={() => handlePageChange(1)}>
            1
          </button>
        );
        pageNumbers.push(
          <button key={2} onClick={() => handlePageChange(2)}>
            2
          </button>
        );
        pageNumbers.push(dots);
        for (let i = totalPage - 4; i <= totalPage; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      } else {
        // Display first two pages, dots, middle pages, and last two pages
        pageNumbers.push(
          <button key={1} onClick={() => handlePageChange(1)}>
            1
          </button>
        );
        pageNumbers.push(
          <button key={2} onClick={() => handlePageChange(2)}>
            2
          </button>
        );
        pageNumbers.push(dots);
  
        for (let i = currentPage - 1; i <= currentPage + 2; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
  
        for (let i = totalPage - 1; i <= totalPage; i++) {
          pageNumbers.push(
            <button key={i} onClick={() => handlePageChange(i)}>
              {i}
            </button>
          );
        }
      }
    }
  
    return pageNumbers;
  };
  
  

  return (
    <div className="user-dashboard">
      <h1 className="user-title">Users</h1>
      <div className="user-stat">
        {dashboardUserData.map((user: DashboardUserInterface) => {
          return (
            <div key={user.id} className="user-box">
              <img src={user.image} alt="" />
              <p>{user.user}</p>
              <h4>{user.numUser}</h4>
            </div>
          );
        })}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <span className="th-span">
                  <span>ORGANIZATION</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                  {isOpenFilter && (
                    <form onSubmit={handleFilter} style={{ zIndex: "20", position: "absolute", top: "4.4rem", left: "1rem" }}>
                    <div>
                    <label className="label-f">Organization</label>
                      <select value={organiztion} onChange={(e) => setOrganiztion(e.target.value)} className="input-box">
                        <option value="" className="select">Select</option>
                        {organizationOptions.map((org, index) => (
                          <option key={index} value={org}>
                            {org}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-f">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="input-box"
                        required
                      />
                    </div>
                    <div>
                      <label className="label-f">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input-box"
                        required
                      />
                    </div>
                    <div>
                      <label className="label-f">Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date"
                        className="input-box"
                        required
                      />
                    </div>
                    <div>
                      <label className="label-f">Phone Number</label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        className="input-box"
                        required
                      />
                    </div>
                    <div>
                      <label className="label-f">Status</label>
                      <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-box">
                        <option value="">Select</option>
                        {statusOptions.map((stat, index) => (
                          <option key={index} value={stat}>
                            {stat}
                          </option>
                        ))}
                      </select>
                    </div>
      
                    <div className="filter-btn">
                      <button type="reset" className="reset">Reset</button>
                      <button type="submit" className="submit">Filter</button>
                    </div>
                  </form>
                  )}
                </span>
              </th>
              <th>
                <span className="th-span">
                  <span>USERNAME</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                </span>
              </th>
              <th>
                <span className="th-span">
                  <span>EMAIL</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                </span>
              </th>
              <th>
                <span className="th-span">
                  <span>PHONE NUMBER</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                </span>
              </th>
              <th>
                <span className="th-span">
                  <span>DATE JOIN</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                </span>
              </th>
              <th>
                <span className="th-span">
                  <span>STATUS</span>{" "}
                  <button onClick={toggleFilter}><IoFilterSharp size={22} className="filter" /></button>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td className="td-status">
                  <span className={user.status} key={index}>{user.status}</span>
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="td-ellipse"
                  >
                    <HiOutlineEllipsisVertical size={24} />
                  </div>
                  {isOpenDropdown === index && (
                    <div className="dropdown-links">
                      <Link to={`/details/${user.id}`} className="link">
                        <img
                          src={viewIMG}
                          alt="view detail"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        View Details
                      </Link>
                      <Link to="/" className="link">
                        <img
                          src={blacklistIMG}
                          alt="blacklist user"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Blacklist User
                      </Link>
                      <Link to="/" className="link">
                        <img
                          src={activateIMG}
                          alt="activate user"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Activate User
                      </Link>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="next-n-prev-btn">
        <div>
          <span className="showing-num">Showing</span> {""}
          <select className="per-page-select" onChange={(event) => {
            const parsedValue = parseInt(event.target.value, 10)
            if(!isNaN(parsedValue)) {
              handlePerPageChange(parsedValue)
            } else {
              console.error("Invalid number selected")
            }
          }}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
          {""}
          <span className="showing-num">
            out {""}
            of {data.length}
          </span>
        </div>
        <div className="next-n-prev-btn">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="btn"
          >
            <IoIosArrowBack size={20} />
          </button>
          {renderPageNumbers()}
          <button
            disabled={currentPage === totalPage}
            onClick={() => handlePageChange(currentPage + 1)}
            className="btn"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersDashboard;
