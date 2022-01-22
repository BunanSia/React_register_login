Assignment from cyber security company for position of front-end developer

1. Clone the project to your local device
2. Navigate to local Write "npm install react-scripts --save" in cmd (in case npm is not recognized, go to https://nodejs.org/en/ and download the package, Edit environmental path and add C:\Program Files\nodejs\ so the system recognize npm command, save and restart cmd and VSC to check if npm --version works)
3. npm install react-facebook-login
4. npm install react-google-login
5. Put command npm start in cmd and you will see the application runs on your local device
6. Note that now the application hasn't been pushed on live, all the facebook and google login pop-up will show that it doesn’t work

Thing needs to be done before you can enable to Facebook and Google login feature

FacebookLogin
1. You will need the following:
  A Facebook Developer Account
  A registered Facebook App with Basic Settings configured
  The Facebook JavaScript SDK
2. Copy the Ad id and replace the empty string in file react-login-register\src\components\accountBox\SNS.jsx, where you will find component called <FacebookLogin>, kindly add your appId in line addId="<Your app Id>"
  
GoogleLogin
1. Go to https://console.developers.google.com/apis/credentials
2. Navigate to Credentials, OAuthClient-ID
3. After creating it just copy the ID and replace the clientID on react-login-register\src\components\accountBox\SNS.jsx, where you will find component called <GoogleLogin>


