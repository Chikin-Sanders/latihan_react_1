import React from 'react';
import logo from './logo.svg';
import './App.css';

function  Form(props) {
    return(
      <div>
        <form>
          <input placeholder="Username" style={{ padding: "10px", margin: "5px 0", borderRadius:"5px", width: "200px" }}/><br/>
          <input placeholder="Password" style={{ padding: "10px", margin: "5px 0", borderRadius: "5px", width: "200px" }}/><br/>
          <button type="submit" style={{ padding: "10px", margin:"10px", width:"100px", borderRadius:"5%"}}><strong>{props.name}</strong></button>
        </form>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>
          Selamat datang di Aplikasi React
        </h2>
      <Form name="Login"/>
      </header>
    </div>
  );
}

export default App;
