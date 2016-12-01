var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: '55px',
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
};

var Loading = React.createClass({
  propTypes: {
    speed: PropTypes.number,
    text: PropTypes.string,
  },
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 200
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    this.speed = this.props.speed;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function() {
    var stopper = this.originalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.speed)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div style={styles.container}>
        <p style={styles.content}> {this.state.text} </p>
      </div>
    );
  },
});

// Loading.PropTypes = {
//   speed: PropTypes.number,
//   text: PropTypes.string,
// };

module.exports = Loading;