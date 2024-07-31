import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import bg from "./signin.png";

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 182, 193, 0.5); /* Light pink color with 50% opacity */
    z-index: 0;
  }
`;

const FormContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  padding: 3rem; /* Increased padding */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px; /* Increased width */
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  color: #6a0dad; /* Violet color */
  border: 2px solid #6a0dad; /* Violet color */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (min-width: 600px) {
    width: 48%;
  }
`;

const CheckboxForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const ForgotPassword = styled.a`
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLoginContainer = styled.div`
  margin-top: 1.5rem;
`;

const SocialLoginTitle = styled.p`
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const SocialLoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: transparent;
  border: 2px solid #6a0dad; /* Violet color */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  flex: 1;
  margin: 0 0.5rem; /* Margins to space out buttons */
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Signin = () => {
  const [isOtpLogin, setIsOtpLogin] = useState(false);

  const handleLoginToggle = () => {
    setIsOtpLogin(!isOtpLogin);
  };

  return (
    <SignInContainer>
      <FormContainer>
        <Title>Sign In</Title>
        <form>
          {!isOtpLogin ? (
            <>
              <label>Enter Email / Mobile Number</label>
              <Input type="email" placeholder="Enter Email / Mobile Number" required />
              <CheckboxForgotContainer>
                <CheckboxContainer>
                  <Checkbox type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </CheckboxContainer>
                <ForgotPassword href="#">Forgot Password?</ForgotPassword>
              </CheckboxForgotContainer>
              <ButtonContainer>
                <Button type="button">Next</Button>
                <Button type="button" onClick={handleLoginToggle}>Login With OTP</Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <Input type="tel" placeholder="Enter your phone number" required />
              <Button type="button">Send OTP</Button>
              <Button type="button" onClick={handleLoginToggle}>Back to Email Login</Button>
            </>
          )}
        </form>
        <SocialLoginContainer>
          <SocialLoginTitle>Sign in with</SocialLoginTitle>
          <SocialLoginButtons>
            <SocialLoginButton>
              <FaGoogle size={24} color="#db4437" />
              Google
            </SocialLoginButton>
            <SocialLoginButton>
              <FaFacebookF size={24} color="#4267B2" />
              Facebook
            </SocialLoginButton>
            <SocialLoginButton>
              <FaApple size={24} color="#000" />
              Apple
            </SocialLoginButton>
          </SocialLoginButtons>
        </SocialLoginContainer>
        <SignupLink href="/Signup">Not registered yet? Sign up here</SignupLink>
      </FormContainer>
    </SignInContainer>
  );
};

export default Signin;
