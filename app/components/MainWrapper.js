var React = require('react');
var styles = require('../styles');

function MainWrapper () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainWrapper;