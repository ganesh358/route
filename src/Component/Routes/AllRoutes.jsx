import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Settings from "./Settings";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
