// FacebookLogin.js
import React from "react";
import styled from "styled-components";

// Define the styled-components
const Container = styled.div`
  border: 1px solid #4267b2;
  border-radius: 3px;
  padding: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`;

const Logo = styled.img`
  height: 24px;
  margin-right: 5px;
`;

const LoginText = styled.span`
  font-size: 14px;
  color: #4267b2;
  font-weight: bold;
`;

// Create the React component
const FacebookLogin = () => {
  return (
    <Container>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/images/facebook logo.png`}
        alt="Facebook Logo"
      />
      <LoginText>Login with Facebook</LoginText>
    </Container>
  );
};

export default FacebookLogin;
