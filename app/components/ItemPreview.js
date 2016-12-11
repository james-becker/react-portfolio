var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var items = require("../data/items.json");

var ItemPreview = React.createClass({
  getDefaultProps: function() {
    return {item: null}
  },
  render: function () {
    return (
      <li key="{item.name}">
        <a href="{item.link}">{item.name}</a>
      </li>
    )
  }
})

module.exports = ItemPreview;