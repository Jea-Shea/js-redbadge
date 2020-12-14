import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Button } from 'reactstrap';

type LoginState = {
    login: String
}

type User = {
    username: string,
    password: string
};



class Login extends React.Component<User, LoginState> {
    constructor(props: User){
        super(props)
    }
    


   render(){
         return (
    <Container className="logins">
       
        <div className="login">
        <InputGroupText className="InputGroup">Email</InputGroupText>
        <Input className="input" placeholder="email" /> 
        </div>

      <div className="login">
        <InputGroupText className="InputGroup">Password</InputGroupText>
         <Input className="input"  placeholder="password" />
      </div>  

      <div>
      <Button className="buttonLight">Login</Button>{' '}
      <Button className="buttonDark">Sign-up</Button>{' '}
      </div>
      
      </Container>
      )
    }
}

export default Login;