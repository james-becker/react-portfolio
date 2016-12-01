var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainWrapper = require('./MainWrapper');

function Home () {
  return (
    <MainWrapper>
      <h1>GitHub Brawl</h1>
      <p className='lead'>What. The. Fuck.</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainWrapper>
  )
}

module.exports = Home;