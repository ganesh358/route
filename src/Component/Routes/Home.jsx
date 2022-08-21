import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/dashboard">
        <h2>Dashboard</h2>
      </Link>

      <Link to="/login">
        <h2>Login</h2>
      </Link>
    </div>
  );
}

export default Home;
