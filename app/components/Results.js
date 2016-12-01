var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainWrapper = require('./MainWrapper');
var Loading = require('./Loading');

var puke = function (obj) {
  return (
    <pre>{JSON.stringify(obj, null, '--')}</pre>
  )
}

var StartOver = function () {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
};

var Results = function (props) {
  var winnerIdx = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIdx = winnerIdx === 0 ? 1 : 0;
  if (props.isLoading === true) {
    return (
      <Loading speed={300} text="Pruning the Hedges" />
    )
  };

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainWrapper> 
        <h1>It's a tie</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
            <UserDetails score={props.scores[winnerIdx]} info={props.playersInfo[winnerIdx]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails score={props.scores[loserIdx]} info={props.playersInfo[loserIdx]} />
          </UserDetailsWrapper>
        </div>
        <StartOver />
      </MainWrapper>
    )
  };

	return (
		<MainWrapper>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winnerIdx]} info={props.playersInfo[winnerIdx]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[loserIdx]} info={props.playersInfo[loserIdx]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainWrapper>
	);
};

Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;