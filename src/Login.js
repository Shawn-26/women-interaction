import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
