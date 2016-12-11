var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import styles from './app.css';

ReactDOM.render(routes, document.getElementById('app'));

let element = `
  <div class="element">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
`;

document.write(element);