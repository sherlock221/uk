/**
 * 自适应搜索文本框
 * 搜索文本框
 * sherlock221b
 */


'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS,
    TextInput,
    TouchableHighlight
    } = React;

var uk = React.createClass({
    render: function () {
        return (
            <View style={css.container}>
                <View style={css.searchContainer}>
                    <TextInput placeholder="请输入感兴趣的内容" style={[css.textInput,css.border]}></TextInput>
                    <TouchableHighlight underlayColor="#99d9f4"  style={[css.textButton,css.border]}>
                        <Text style={[css.buttonText]}>搜索</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
});

var css = StyleSheet.create({
    container: {
        marginTop : 35,
        padding : 20
    },
    border : {
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8
    },


    //搜索框
    searchContainer :{
      flexDirection : 'row'
    },
        textInput :{
            flex : 6,
            marginRight : 5,
            fontSize: 18,
            padding : 5,
            color : '#48BBEC'
        },

        textButton :{
            flex : 1,
            backgroundColor: '#48BBEC',
            alignItems: 'center',
            padding : 5

        },
        buttonText : {
            fontSize: 18,
            color: 'white'
        }


});

AppRegistry.registerComponent('uk', () => uk);
