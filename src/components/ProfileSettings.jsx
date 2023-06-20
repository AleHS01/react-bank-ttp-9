import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileSettings() {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    return navigate("/userProfile/details");
  };

  return (
    <div>
      <h2>Profile Settings</h2>

      <button onClick={navigateToDetails}>Go to Details</button>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileSettings;
