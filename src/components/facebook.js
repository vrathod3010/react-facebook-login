import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
 
  };

  responseFacebook = response => {
    console.log(response);

    
  };


   responseGoogle = (response) => {
    console.log(response);
  }

  componentClicked = () => console.log("clicked");

  render() {
    

 
     let fbContent = (
        <FacebookLogin
          appId="441076183380594"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    
      let gbContent = (<GoogleLogin
        clientId="147888834235-0nm274au2jl9p20blfedfqb8q63o8rg5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
       
      );

    return(
      <div>

<div>{fbContent}</div> 


{gbContent}
      </div>
      
    )
  }
}