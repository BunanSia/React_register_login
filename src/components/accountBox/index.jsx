import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
// import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import "./index.css";
import {SNS} from "./SNS";

const BoxContainer = styled.div`
  width: 380px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: .2em;
`;

const HeaderContainer = styled.div`
  padding-top: .2em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  color: #000000;
  z-index: 10;
  margin: 2px;
`;

export const SmallText = styled.h5`
  color: #000000;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const MiddleText = styled.h5`
  color: #000000;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 1px;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export function AccountBox(props) {
  const [active, setActive] = useState("signin");
  
  const switchToSignup = () => {
      setActive("signup");
  };

  const switchToSignin = () => {
      setActive("signin");
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>

      <BoxContainer>
        <TopContainer>
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome Back</HeaderText>
              <SNS/>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <MiddleText>Start from free</MiddleText>
              <HeaderText>Create an account</HeaderText>
              <SNS/>
              <SmallText>
              Or use your email for registration ─────────────────
              </SmallText>
            </HeaderContainer>
          )}         
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
