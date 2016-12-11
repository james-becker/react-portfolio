var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ItemPreview = require('ItemPreview');
var items = require('../data/items')

items.each(function(itemID) {
  // Render an ItemPreview for each item in the ../data/items.js array.
  <ItemPreview itemID={itemID} />
}