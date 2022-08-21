// import Settings from "./Settings";

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      {/* <Settings /> */}
      <Link to="/dashboard/settings">Settings</Link>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
}
export default Dashboard;
