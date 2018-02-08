import _ from 'lodash';
import './style.css';
import Snow from './snow.jpg';
import Data from './data.xml';
import printValue from './print.js'


function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var btn = document.createElement('button'); 
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printValue;
    element.appendChild(btn);

    var snowImage = new Image(200, 200);
    snowImage.src = Snow;
    element.appendChild(snowImage);
    console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());