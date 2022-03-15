import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { decodeToken } from "react-jwt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Dashboard() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [urlData, setUrldata] = useState("");
  const [longUrl, setlongUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return history.replace("/login");
      const user = decodeToken(token);
      if (!user) {
        localStorage.removeItem("token");
        history.push("/login");
      }

      try {
        const res = await fetch("https://m-i.herokuapp.com/api/dash", {
          method: "GET",
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        setName(data.message);
        setUrldata(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [urlData]);

  const handleClick = async (event) => {
    try {
      localStorage.removeItem("token");
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://m-i.herokuapp.com/api/dash", {
        method: "POST",
        body: JSON.stringify({
          longUrl,
        }),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleinput = (event) => {
    event.preventDefault();
    setMessage("");
    setlongUrl("");
  };

  return (
    <div className="dashboard">
      <div className="dash-main">
        <div className="dash-content">
          <div className="dash-user">
            <AccountCircleIcon color="action" sx={{ fontSize: 40 }} />
            {name}
          </div>
          <div className="dash-button">
            <button onClick={handleClick}>logout</button>
          </div>
        </div>
      </div>

      <div className="dash-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div>
              <input
                className="input-box"
                type="url"
                placeholder="Shorten a link here.."
                value={longUrl}
                onChange={(event) => setlongUrl(event.target.value)}
                onClick={handleinput}
                required
              />
            </div>

            <div>
              <button type="submit" className="demo-btn">
                SHORT IT!
              </button>
            </div>
            <div>
              {message && (
                <h5>
                  {" "}
                  <a href={message} target="_blank">
                    {message}
                  </a>
                </h5>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className="table-container">
        {urlData &&
          urlData?.map((data) => (
            <div className="data">
              <div>
                <h4>Long Url</h4>
                <div className="longurl">{data.longUrl}</div>
              </div>
              <div>
                <h4>SHORT Url </h4>
                <a href={data.shortUrl} target="_blank" rel="noreferrer">
                  {data.shortUrl}
                </a>
              </div>
              <div>
                <h4>Clicks</h4>
                {data.clicks}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
