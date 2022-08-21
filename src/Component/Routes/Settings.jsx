import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

function Settings() {
  const { logoutUser } = useContext(AuthContext);
  const navaigate = useNavigate();
  const handleclick = () => {
    logoutUser();
    navaigate("/");
  };
  return (
    <div>
      <button onClick={handleclick}>Logout</button>
    </div>
  );
}

export default Settings;
