// ES 2015 Syntax
var React = require('react-native');
var {
  Text,
  View,
  AppRegistry
} = React;

// Create component
var Stopwatch = React.createClass({
  // render method
  render: function(){

  }
});

// ES 2015 Fat Arrow Syntax
AppRegistry.registerComponent('stopwatch', () => Stopwatch);
