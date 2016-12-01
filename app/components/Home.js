var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainWrapper = require('./MainWrapper');

function Home () {
  return (
    <MainWrapper>
<<<<<<< HEAD
      <h1>GitHub Battle</h1>
      <p className='lead'>What is a jquery?</p>
=======
      <h1>GitHub Brawl</h1>
      <p className='lead'>What. The. Fuck.</p>
>>>>>>> 0e3f81f521be89c2129fee491cba16e35c239876
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainWrapper>
  )
}

module.exports = Home;