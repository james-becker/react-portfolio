var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavBar = React.createClass({
  render: function() {
    return (
      <ul className="topnav">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    )
  }
});

module.exports = NavBar;