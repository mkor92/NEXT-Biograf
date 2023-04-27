'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const LoginForm: FC = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  return (
    <section className="sec-cont login-container">
      <div>
        <h1>Inloggning</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserData((prevData) => {
                return {
                  ...prevData,
                  email: e.target.value,
                };
              });
            }}
            className="form-input-field"
            type="text"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserData((prevData) => {
                return {
                  ...prevData,
                  password: e.target.value,
                };
              });
            }}
            className="form-input-field"
            type="password"
            id="password"
            name="password"
          />
          <button className="primary-btn">Logga in</button>
        </form>
        <p>
          Har du inget konto?
          <span>
            <Link href="/signup" className="singup-link">
              Registrera dig!
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
