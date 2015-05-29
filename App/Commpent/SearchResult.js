/**
 * Created by abjia on 15-5-29.
 */
'use strict';


var React = require('react-native');
var {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
    Component
    } = React;


var  SearchResult = React.createClass({
     //初始化
     getInitialState : function(){
            var dataSource = new ListView.DataSource(
                {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
            );
         return {
             dataSource: dataSource.cloneWithRows(this.props.listings)
         };
     },


    //渲染row
    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight   onPress={}
                underlayColor='#dddddd'>
                <View>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        );

    },

    //渲染
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
        );
    }

});



var css = StyleSheet.create({


});

module.exports = SearchResult;