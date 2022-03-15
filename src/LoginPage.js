import { useHistory } from "react-router-dom";
import { useState } from "react";

export function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://m-i.herokuapp.com/api/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setMessage(data.message);
      if (data.token) {
        history.push("/dashboard");
        return;
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="signup-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>

        <br />
        {message && <span>{message}</span>}
        {error && <span>{error}</span>}
      </form>
      <h2>New User</h2>
      <button onClick={() => history.push("/signup")}>Signup</button>
      <br />
      <a
        href="https://minily.netlify.app/forget-password"
        target="_blank"
        rel="noreferrer"
      >
        forgetpassword?
      </a>
    </div>
  );
}
