import React, { useState, useEffect } from "react";
import { register } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Register() {
  // Set states for form as empty
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // Taken from Login.jsx to check if a user is logged in/page is loading
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  // const resetForm = () => {
  //   setFullName("");
  //   setEmail("");
  //   setMobile("");
  //   setPassword("");
  //   setPassword2("");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await register(
      fullname,
      email,
      phone,
      password,
      password2
    );

    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Full Name'
          name=''
          id=''
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type='email'
          placeholder='Email'
          name=''
          id=''
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type='number'
          placeholder='Mobile Number'
          name=''
          id=''
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br /> <br />
        <input
          type='password'
          placeholder='Password'
          name=''
          id=''
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type='password'
          placeholder='Confirm Password'
          name=''
          id=''
          onChange={(e) => setPassword2(e.target.value)}
        ></input>
        <br />
        <br />
        <button type='submit'>Register</button>
        {/* <button onClick={resetForm}>Clear</button> */}
      </form>
    </div>
  );
}

export default Register;
