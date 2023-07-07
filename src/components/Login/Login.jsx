import { useState } from "react";
import validation from "../Validation/Validation";

import styles from "./Login.module.css";

const Login = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p className={styles.error}>{errors.email && errors.email}</p>

          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p className={styles.error}>{errors.password && errors.password}</p>

          <button
            className={styles.button}
            disabled={
              !userData.email ||
              !userData.password ||
              errors.email ||
              errors.password
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
