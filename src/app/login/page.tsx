import { FC } from 'react';
import Link from 'next/link';

const LoginForm: FC = () => {
  return (
    <section className="sec-cont login-container">
      <div>
        <h1>Inloggning</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            className="form-input-field"
            type="text"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
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
