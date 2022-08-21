import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())

      .then((res) => {
        console.log(res);
        loginUser(res.token);
        navigate("/dashboard");
      });
  };
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={formState.email}
              name="email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={formState.password}
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input
            data-testid="form-submit"
            type="submit"
            value="SUBMIT"
            onClick={handleSubmit}
          />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
