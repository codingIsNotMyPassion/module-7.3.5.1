import { useHistory } from "react-router-dom";
import { useState } from "react";

export function SignupPage() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://m-i.herokuapp.com/api/signup", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="User Name"
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <br />

        <button type="submit">Signup</button>

        <br />
        {message && <span>{message}</span>}
      </form>
      <h2>Already a User</h2>
      <button onClick={() => history.push("/login")}>login</button>
    </div>
  );
}
