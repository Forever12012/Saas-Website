import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent"; // Adjust the import path as needed

export const PrivateRoute = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token && !showModal) {
      setShowModal(true);
    }
  }, [token, showModal]);

  const handleLoginRedirect = () => {
    setShowModal(false);
    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return showModal ? (
    <ModalComponent
      onClose={() => navigate("/home")}
      onLogin={handleLoginRedirect}
    />
  ) : (
    children
  );
};
