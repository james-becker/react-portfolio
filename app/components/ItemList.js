var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ItemPreview = require('ItemPreview');
//var items = require('../data/items') uncomment only if not receiving props

var ItemList = React.createClass({
  getDefaultProps: function() {
    return {items: []}
  },
  render: function() {
    var items = this.props.items.map(function (item) {
      return (
        <ItemPreview item="{item}" />
      );
    });

    return (
      <ul>
        {items}
      </ul>
    )
  },
});

module.exports = ItemList;
