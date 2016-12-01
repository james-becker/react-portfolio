var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home () {
  return (
    <MainWrapper>
      <h1>GitHub Battle</h1>
      <p className='lead'>Suck My Cock, Asshole.</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainWrapper>
  )
}

module.exports = Home;