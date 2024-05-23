import React from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UsersService";

const Sidebar = () => {
  const isAuthenticated = UserService.isAuthenticated();

  const handleLogout = () => {
    const confirmDelete = window.confirm("Are you sure you want to logout this user?");
    if (confirmDelete) {
      UserService.logout();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#073618",
        padding: "20px",
        position: "relative",
        width: "300px",
        height: "100%",
      }}
      id="sidebar"
    >
      <h3
        style={{
          position: "relative",
          textAlign: "center",
          marginTop: "0",
        }}
      >
        Army System
      </h3>
      <ul>
        <li>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            to="/Soldier"
            className="active"
          >
            <span>Soldiers</span>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            to="/Unit"
            className="active"
          >
            <span>Units</span>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            to="/Mission"
            className="active"
          >
            <span>Missions</span>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            to="/Equipment"
            className="active"
          >
            <span>Equipments</span>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            to="/Training"
            className="active"
          >
            <span>Training</span>
          </Link>
        </li>
        {/* Add other sidebar links */}
      </ul>
      {isAuthenticated && (
        <div style={{ position: "absolute", bottom: "2px", left: "20px" }}>
          <Link
            to="/"
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
