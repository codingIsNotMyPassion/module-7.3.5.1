import { Demosite } from "./Demosite";
import { useHistory } from "react-router-dom";

export function LandingPage() {
  const history = useHistory();

  return (
    <div>
      <div className="lan-main">
        <div className="lan-nav">
          <h1>Minily</h1>
          <div>
            <button className="lan-btn" onClick={() => history.push("/login")}>
              Login
            </button>
            <button className="lan-btn" onClick={() => history.push("/signup")}>
              Signup
            </button>
          </div>
        </div>
        <div className="lan-content">
          <div className="content-left">
            <h1>More than Just Shorter Links </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>
          <div>
            <img
              className="image"
              src="https://www.kindpng.com/picc/m/35-357810_working-at-desk-cartoon-hd-png-download.png"
              alt="officeimage"
            />
          </div>
        </div>
        <div className="demo-div">
          <Demosite />
        </div>
        <div>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="feature-page">
          <div className="feature-content">
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="feature-content">
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="feature-content">
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="acces-portal">
          <h2>Boost Your links today!!!</h2>
          <button
            className="account-btn"
            onClick={() => history.push("/signup")}
          >
            Create Account
          </button>
        </div>
      </div>

      <div className="footer">
        <h1>Minily</h1>
        <h3>Contacts: minily@gmail.com</h3>
      </div>
    </div>
  );
}
