/**
 * 图片自适应
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
                <Image style={css.img} source={{uri : "http://www.29trip.com/jd/UploadFiles_jd/200808/20080814205931146.jpg"}}/>
            </View>
        );
    }
});

var css = StyleSheet.create({
    container: {
        marginTop : 35,
        padding : 20


    },
    img :{
        flex: 1,
        resizeMode: Image.resizeMode.cover
    }


});

AppRegistry.registerComponent('uk', () => uk);
