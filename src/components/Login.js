import "../styling/login.css";
import Header from "./Header";
import {useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("https://test-repo-f8q2.vercel.app/api/findorcreateuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/dashboard", { state: { username: username, score: data.score } } );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-body">
      <Header />
      <div className="login-body-content">
        <div>
          <form className="login" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter the player name"
              required
            />
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
