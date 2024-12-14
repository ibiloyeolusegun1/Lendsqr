import { useState } from "react";
import { Link } from "react-router-dom";

import loginIMG from "../../assets/login-image.png";
import logoIMG from "../../assets/logo.png";

function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false); 

  const togglePasswordVisibility = () => setOpen((prevOpen) => !prevOpen);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-container">
        <div className="image">
          <img src={logoIMG} alt="logo" className="logo" />
          <div className="image-container">
            <img src={loginIMG} alt="login" />
          </div>
        </div>

        <div className="form-container">
          <div className="form-box">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input-box"
                  required
                />
              </div>
              <div className="input-box1">
                <input
                  type={open ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <div onClick={togglePasswordVisibility} className="show-pass">
                  {open ? <span>HIDE</span> : <span>SHOW</span>}
                </div>
              </div>

              <Link to="/" className="forgot-pass">
                FORGOT PASSWORD?
              </Link>
              <button type="submit"><Link to="/dashboard" className="login-link">LOG IN</Link></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
