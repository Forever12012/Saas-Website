import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const ModalComponent = ({ onClose, onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
  };

  const handleCancel = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.container}>
        <h2>You need to sign up or log in to access the checkout page.</h2>
        <div style={modalStyles.buttonContainer}>
          <button style={modalStyles.button} onClick={handleLogin}>
            Log In
          </button>
          <button style={modalStyles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    outline: "none",
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    outline: "none",
  },
};

export default ModalComponent;
