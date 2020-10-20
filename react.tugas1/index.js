import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const elemenHeader = React.createElement(
  'h1', { align: 'center' }, 'Apa kabar dunia???'
);

function Clicker(props){
  return(
    <div>
      <h4 style={{color: "red"}}>Selamat datang {props.name}!!!</h4>
      <p>Anda telah bergabung di dalam pelatihan {props.train}</p>
    </div>
  )
}

class Gambar extends React.Component{
  render(){
    return <img src={this.props.imgURL} alt="catImage" width="400px"/>
  }
}

const elemenHTML = (
  <div style={{ padding: "15px" }}>
    <Clicker name="Aziz Hussein" train="React.js"/>
    <Gambar imgURL="https://besthqwallpapers.com/Uploads/14-8-2018/61520/thumb2-ginger-british-cat-cat-with-big-green-eyes-cute-animals-british-shorthair-cat-funny-cats.jpg"/>
  </div>
);

ReactDOM.render(
  [elemenHeader, elemenHTML],
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
