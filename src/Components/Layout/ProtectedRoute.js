import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoute({ token, children }) {
  if (!token) {
    return React.createElement(Navigate, {
      to: "/signin",
      replace: true
    });
  }

  return children;
}

export default ProtectedRoute;
