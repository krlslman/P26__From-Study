import { useState } from "react";

const FormObject = () => {
  const [formValues, setformValues] = useState({
    username: '',
    email: '',
    password: '',
    city: ''
  }); // '' initial value anlamına gelir

  // react herşeyi static olarak kabul eder
  // dinamik hale getirmek için hook kullanırız (useState vs.)

  const handleFormValues = (e) => {

    console.log(e.target.id);
    console.log(e.target.value);
    console.log({...formValues});

    setformValues({...formValues, [e.target.id]: e.target.value});
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    const { username, email, password, city } = formValues;
    alert(
        `username: ${username}
        email: ${email}
        password: ${password}
        city: ${city}`
    );
  }
  

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username <span className="text-danger">{formValues.username}</span>
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">{formValues.email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" 
          value={formValues.password}
          onChange={handleFormValues} />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City <span className="text-danger">{formValues.city}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={formValues.city}
            onChange={handleFormValues}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
