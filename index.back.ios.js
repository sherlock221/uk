/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NavigatorIOS,
} = React;



var  SearchPage = require("./App/Commpent/SearchPage");


var uk = React.createClass({
  render: function() {
    return (
        <NavigatorIOS
            style = {styles.container}
            initialRoute={{
            component: SearchPage,
           title: 'search page'
      }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

AppRegistry.registerComponent('uk', () => uk);
