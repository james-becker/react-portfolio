var React = require('react');
var NavBar = require('./NavBar')

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
