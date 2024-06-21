// src/pages/dashboard/User.jsx
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

export default User;
