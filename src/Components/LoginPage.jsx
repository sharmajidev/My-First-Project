import { useState } from "react";
const user = {
  email: " ",
  password: " ",
  loggedIn: false,
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleButton(){
    if(!email || !password){
      setError("Both Email and Passowrd are required");
      return;
    }
    if(email === user.email){
      setError("Email Id already exist");
      return;
    }

     user.email = email;
     user.password = password;
     user.loggedIn = true;

     setError('');

     alert(`welcome ${user.email}! You are now LoggedIn`)

     setEmail('');
     setPassword('');
  }

  function handleInputEmail(e){
   setEmail(e.target.value);
  }

   function handleInputPassword(e){
   setPassword(e.target.value);
  }

  return (
    <div className="login-container">
      <div>
        <label>
          {" "}
          <strong>Email Address</strong>{" "}
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleInputEmail}
          className="form-container"
          required
        />
      </div>
      <div>
        <label>
          {" "}
          <strong>Password</strong>{" "}
        </label>
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={handleInputPassword}
          value={password}
          className="form-container"
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="btn-container">
        <button className="btn btn-primary loginBtn" type="submit" onClick={handleButton}>
          Log In
        </button>
      </div>

  
    </div>
  );
};

export default LoginPage;
