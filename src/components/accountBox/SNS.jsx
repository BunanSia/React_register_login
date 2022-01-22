import React, { useState } from "react";
import googlehover from "./images/googlehover.png";
import facebookhover from "./images/facebookhover.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import styled from "styled-components";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import './index.css';

const Button= styled.div`
border-radius: 5px;
background: #fff;
padding: 5px;
text-align: center;
width: 150px;
height: 30px;
float: left;
flex:50%;
font-weight: 500;
font-size: 12.5px;
color: #000;
&:hover {
  background:rgb(60,113,255);
  color:#fff;
}
margin: 5px;
`;


export function SNS(props){

    const [fbisshown,setFbisshown]=useState(false);
    const [goisshown,setGoisshown]=useState(false);
    const responseFacebook = (response) => {
        console.log(response);
    }  
    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
    



      <column>
          <FacebookLogin className="BtnFacebook"
              appId="4699337046853944" 
              fields="name,email,picture"
              autoLoad={false}
              callback={responseFacebook} 
              cssClass="btnFacebook"
              icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}} src={fbisshown?facebookhover:facebook}></i>}
              // textButton = "&nbsp;&nbsp;Sign Up with Facebook"
              render={renderProps=>(
                <Button
                  onClick={renderProps.onClick}        
                  onMouseEnter={() => setFbisshown(true)}
                  onMouseLeave={() => setFbisshown(false)}>
                  <img className="facebook" src={fbisshown?facebookhover:facebook} height="10px" width="5px" alt="facebook" />
                  Sign up by Facebook
                </Button>
              )}>
            </FacebookLogin>          
          
          <GoogleLogin
            clientId="1990332421-40as7rd9thobeb4d4kmci0k86u8sd4bo.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="btnGoogle"
            render={renderProps => (
              <Button 
                onClick={renderProps.onClick} 
                onMouseEnter={() => setGoisshown(true)}
                onMouseLeave={() => setGoisshown(false)}>
                  <img className="google" src={goisshown?googlehover:google} height="10px" width="5px" alt="facebook" />
                  Sign up by Google
                </Button>)}
            disabled={false}>      
          </GoogleLogin>
      </column>
    )
}
