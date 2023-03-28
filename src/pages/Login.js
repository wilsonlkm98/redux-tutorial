import '../css/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../redux/authApi';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // async function handleLogin() {
  //   if (username === 'admin' && password === 'admin') {
  //     navigate('/home')
  //   }
  // }

  async function handleLogin(event) {
    event.preventDefault();
    const response = await authApi.login(username, password);
    if (response.success) {
      navigate('/home');
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="login-page">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
