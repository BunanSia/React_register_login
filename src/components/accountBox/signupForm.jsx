import React, { useState } from 'react';
import { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import {useEffect} from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";
import check from "./images/check.png";
import uncheck from "./images/uncheck.png";
import "./index.css";

const Terms = styled.h5`
  width: 250px;
  color: #000000;
  font-weight: 500;
  font-size: 10px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const Condition= styled.div`
  background: #fff;
  padding: 3px;
  width: 250px;
  height: 30px;
  float: left;
  flex:50%;
  font-weight: 500;
  font-size: 9px;
  color: #000;
  margin: 2px;
`;

const Checkbox= styled.div`
  background: #fff;
  padding: 3px;
  width: 30px;
  height: 10px;
  float: left;
  flex:50%;
  font-weight: 500;
  font-size: 9px;
  color: #000;
  margin: 2px;
`;


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [passwordOne, setPasswordOne] = useState("")

  // booleans for password validations
  const [containsN, setContainsN] = useState(false) // number
  const [contains8C, setContains8C] = useState(false) // min 8 characters

  // checks all validations are true
  const [allValid, setAllValid] = useState(false)
  const [terms,setTerms]=useState(false)
  // Client shall check on the terms otherwise submit button is disabled
  const checkTerms=(e) => {
    setTerms(e.target.checked)
  }
  const validatePassword = () => {
    // has number
    if (/\d/.test(passwordOne)) setContainsN(true)
    else setContainsN(false)

    // has 8 characters
    if (passwordOne.length > 7) setContains8C(true)
    else setContains8C(false)

     // all validations passed
    if (containsN  && contains8C && terms) setAllValid(true)
    else setAllValid(false)
  }

  const handleSubmit=(e)=> {
    alert('Submitted' );
    e.preventDefault();
  }

  // const Allvalidtext=(allValid)?(<div>Allvalid</div>):(<div>:Not allvalid</div>)
  useEffect(()=>{
    validatePassword()
  },[passwordOne,terms,contains8C,containsN,validatePassword]
  );

  return (
    <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password"
          value={passwordOne} 
                          onChange={e=>setPasswordOne(e.target.value)} 
                          onKeyUp={validatePassword}
          />
          <column>
            <Condition>
              <img className="check" src={contains8C?check:uncheck}  alt="icon1" />
                8 Characters min.
              <img className="check" src={containsN?check:uncheck}  alt="icon2" />
              One number
            </Condition>
          </column>
          <column>
          <p class="font2">    
          <lable><input type="checkbox" onClick={(e)=>checkTerms(e)}/>
                <span>By creating account, you agree to accept our Privacy 
                policy, Terms of Service and Notification settings.
                </span>
              </lable>
          </p>
          </column>
          <Marginer direction="vertical" margin={10} />  
          <Marginer direction="vertical" margin={10} />  
          <SubmitButton type="submit" value="Submit" disabled={!allValid}>Signup</SubmitButton>
        </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
