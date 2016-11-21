// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');
// Create react Component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function(){
    var daysItems = [];

    for (let i = 0; i < 7; i++) {
      var day = Moment().add(i,'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems
  }
});

// Style the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff heigth wise
    alignItems: 'center' // Moves stuff width wise
  },
  textStyle:{
    color: 'green'
    }
});

// Show the react Component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
