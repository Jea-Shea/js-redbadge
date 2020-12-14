import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Login from './components/login';
import { Button } from 'reactstrap';


let userName: string = 'Am I getting passed to the Clock component?'
let password: string = 'You sure are!';

            //requiring that app only take functional components         
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <h1>Give the Gift</h1>
           <div className="home">
             
           <Login username={userName} password={password} />
        </div>
    </div>
  );
}

export default App;


//Tried https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it and https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions
