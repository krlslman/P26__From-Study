import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // initial value "" anlamına gelir

  // react herşeyi static olarak kabul eder
  // dinamik hale getirmek için hook kullanırız (useState vs.)

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(
      `username: ${username}
      email: ${email}
      password: ${password}
      `)
    // setEmail('');
    // setPassword('');
    // setUsername('');
    console.log(e.target);
    e.target.reset();
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username <span className="text-danger">{username}</span>
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
