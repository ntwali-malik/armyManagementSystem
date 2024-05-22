import React from "react";

const Sidebar = () => {
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
          <a
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            href="/Soldier"
            className="active"
          >
            <span>Soldiers</span>
          </a>
        </li>
        <li>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            href="/Unit"
            className="active"
          >
            <span>Units</span>
          </a>
        </li>
        <li>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            href="/Mission"
            className="active"
          >
            <span>Missions</span>
          </a>
        </li>
        <li>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            href="/Equipment"
            className="active"
          >
            <span>Equipments</span>
          </a>
        </li>
        <li>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
            }}
            href="/Training"
            className="active"
          >
            <span>Training</span>
          </a>
        </li>
        {/* Add other sidebar links */}
      </ul>
    </div>
  );
};

export default Sidebar;
