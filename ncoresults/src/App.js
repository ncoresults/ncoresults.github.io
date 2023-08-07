import React, { useState } from 'react';
import './App.css';
import data from './results.json';
import Results from './Components/results';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [result, setResult] = useState({});
  const [type, setType] = useState('password');
  const [hide, setHide] = useState(true);

  const handleHidePassword = () => {
    if (hide) {
      setHide(false);
      setType('text');
    } else {
      setHide(true);
      setType('password');
    }
  }

  const handleLogin = (evt) => {
    evt.preventDefault();

    let foundUser = false;
    data.forEach(obj => {
      if (obj['USER NAME'] === username.trim() && obj['Password'] === password) {
        setIsUser(true);
        setResult(obj);
        foundUser = true;
        setLoginError(false);
        return;
      }
    });

    if (!foundUser) {
      setLoginError(true);
      setIsUser(false);
    }
  }

  return (
    <div className="app-container">
      {!isUser ? (
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <p style={{ fontSize: '16px', color: 'blue', fontWeight: 'bolder' }} className='loginText'>National Commerce Olympiad 2023 Results!!!</p>
              <p className='loginText'>Login</p>
              <input type="text" required placeholder="Username" value={username} onChange={evt => setUsername(evt.target.value)} />
              <div class="input-icon-container">
                <input
                  type={type}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={evt => setPassword(evt.target.value)}
                />
                <i style={{ color: 'green' }} className="fas fa-eye icon" onClick={handleHidePassword} ></i>
              </div>
              {loginError ? <><p className='loginError'>Incorrect Username or Password</p> <p className='error-msg'>Login credentials were sent on mail and whatsapp</p></> : null}
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="centered-container">
          <Results result={result} />
        </div>
      )}
    </div>
  );
}

export default App;
