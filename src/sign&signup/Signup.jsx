import React from 'react';
import styled from 'styled-components';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import bg from "./signin.png";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Adjusted height to account for navbar and footer */
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
  padding: 1.5rem; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px; /* Increased width */
  width: 100%;
  z-index: 1;
  margin: 1rem 0; /* Reduced vertical margin */

  @media (max-width: 600px) {
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem; /* Larger font size */
  color: #333; /* Darker color */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem; /* Reduced margin */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem; /* Larger font size */
  color: #333; /* Darker color */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (min-width: 600px) {
    width: auto;
    margin-left: 0;
    margin-right: 0;
  }
`;

const SignupText = styled.div`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #333; /* Darker color */
`;

const SignupLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLoginContainer = styled.div`
  margin-top: 1.5rem;
`;

const SocialLoginTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333; /* Darker color */
  position: relative;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  &::before {
    margin-right: 0.75rem;
  }

  &::after {
    margin-left: 0.75rem;
  }
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

const SignUp = () => {
  return (
    <>
      {/* <Navbar /> */}
      <SignUpContainer>
        <FormContainer>
          <Title>Sign Up</Title>
          <form>
            <label>Full Name</label>
            <Input type="text" placeholder="Enter your full name" required />
            <label>Email</label>
            <Input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <Input type="password" placeholder="Enter your password" required />
            <label>Confirm Password</label>
            <Input type="password" placeholder="Confirm your password" required />
            <ButtonContainer>
              <Button type="submit">Sign Up</Button>
            </ButtonContainer>
          </form>
          <SocialLoginContainer>
            <SocialLoginTitle>Sign up with</SocialLoginTitle>
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
          <SignupText>
            Already have an account? <SignupLink href="/Signin">Sign in</SignupLink>
          </SignupText>
        </FormContainer>
      </SignUpContainer>
      {/* <Footer /> */}
    </>
  );
};

export default SignUp;
