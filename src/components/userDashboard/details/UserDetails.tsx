import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CgArrowLongLeft } from "react-icons/cg";
import { RxStarFilled, RxStar } from "react-icons/rx";


import "../../../scss/components/_details.scss";
import imgID from "../../../assets/by-ID.png"

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

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://6759cad4099e3090dbe2f1f3.mockapi.io/users/${id}`
        );
        setUser(res.data);
      } catch {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // checking for null user details
  if (!user) return <p>User not found.</p>;

  return (
    <div className="user-details">
      <Link to="/dashboard" className="link">
        <CgArrowLongLeft size={24} /> <span>Back to Users</span>
      </Link>
      <div className="title">
        <h1>User Details</h1>
        <div className="buttons">
          <button className="btn blacklist">BLACKLIST USER</button>
          <button className="btn activate">ACTIVATE USER</button>
        </div>
      </div>

      <div className="details">
        <div className="detail-by-id">
          <div className="image-box">
            <div className="image">
              <img src={imgID} alt="" />
            </div>
            <div className="text">
              <p>{user.name}</p>
              <span>{user.uid}</span>
            </div>
          </div>

          <div className="rating">
            <p>User's Tier</p>
            <div className="stars">
              <RxStarFilled size={20} color="#E9B200"/>
              <RxStar size={20} color="#E9B200"/>
              <RxStar size={20} color="#E9B200"/>
            </div>
          </div>
          
          <div className="bank-detail">
            <p>200,000.00</p>
            <span>9906782392/Providus Bank</span>
          </div>
        </div>

        <div className="details-link">
          <Link to="/" className="link" style={{ borderBottom: "2px solid #39CDCC", color: "#39CDCC" }}>Generals Details</Link>
          <Link to="/" className="link">Documents</Link>
          <Link to="/" className="link">Bank Details</Link>
          <Link to="/" className="link">Loans</Link>
          <Link to="/" className="link">Savings</Link>
          <Link to="/" className="link">App and System</Link>
        </div>
      </div>

      <div className="info">
        <div className="info-details">
          <h1>Personal Information</h1>
          <div className="info-flex">
            <div>
              <span>FULL NAME</span>
              <h3>{user.name}</h3>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <h3>{user.phone}</h3>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <h3>{user.email}</h3>
            </div>
            <div>
              <span>BVN</span>
              <h3>{user.phone}</h3>
            </div>
            <div>
              <span>GENDER</span>
              <h3>Female</h3>
            </div>
            <div>
              <span>MARITAL STATUS</span>
              <h3>Married</h3>
            </div>
            <div>
              <span>CHILDREN</span>
              <h3>None</h3>
            </div>
            <div>
              <span>TYPE OF RESIDENT</span>
              <h3>Parent's Apartment</h3>
            </div>
          </div>

          <h1>Education and Employment</h1>
          <div className="info-flex">
            <div>
              <span>LEVEL OF EDUCATION</span>
              <h3>B.Sc</h3>
            </div>
            <div>
              <span>EMPLYMENT STATUS</span>
              <h3>Employed</h3>
            </div>
            <div>
              <span>SECTOR OF EMPLOYMENT</span>
              <h3>FinTech</h3>
            </div>
            <div>
              <span>DURATION OF EMPLOYMENT</span>
              <h3>2 years</h3>
            </div>
            <div>
              <span>OFFICE EMAIL</span>
              <h3>grace@lendsqr.com</h3>
            </div>
            <div>
              <span>MONTHLY INCOME</span>
              <h3>₦200,000.00- ₦400,000.00</h3>
            </div>
            <div>
              <span>LOAN REPAYMENT</span>
              <h3>40,000</h3>
            </div>
          </div>

          <h1>Socials</h1>
          <div className="info-flex">
            <div>
              <span>TWITTER</span>
              <h3>@User_name</h3>
            </div>
            <div>
              <span>FACEBOOK</span>
              <h3>{user.name}</h3>
            </div>
            <div>
              <span>INSTAGRAM</span>
              <h3>@User_name</h3>
            </div>
          </div>

          <h1>Guarantor</h1>
          <div className="info-flex-g">
            <div>
              <span>FULL NAME</span>
              <h3>Bayo Olson</h3>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <h3>09087657866</h3>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <h3>bayo77@gmail.com</h3>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <h3>Sister</h3>
            </div>
          </div>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
}

export default UserDetails;



