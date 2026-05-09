import { useState } from "react";

import api from "../services/api";

function Signup() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("ADMIN");

  const handleSignup = async () => {

    try {

      const response =
        await api.post(
          "/api/auth/signup",
          {
            name,
            email,
            password,
            role
          }
        );

      console.log(response.data);

      alert("Signup Success");

      window.location.href =
        "/login";

    } catch(error) {

      console.log(error);

      alert("Signup Failed");
    }
  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >

        <option value="ADMIN">
          ADMIN
        </option>

        <option value="MEMBER">
          MEMBER
        </option>

      </select>

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  );
}

export default Signup;