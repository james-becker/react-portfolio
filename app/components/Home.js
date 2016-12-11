var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainWrapper = require('./MainWrapper');
var ItemList = require('./ItemList');
var items = require ('../data/items.json');

function Home () {
  return (
    <MainWrapper>
      <h1>James Becker</h1>
      <p className="lead">Web Developer</p>
      <ItemList items="{items}" />
    </MainWrapper>
  )
}

module.exports = Home;
