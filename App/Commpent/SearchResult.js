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

    rowPressed : function(propertyGuid){
        var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
    },
    //渲染row
    renderRow(rowData, sectionID, rowID) {
        var price = rowData.price_formatted.split(' ')[0];
        return (
            <TouchableHighlight  onPress={() => this.rowPressed(rowData.guid)}
                underlayColor='#dddddd'>
                <View style={styles.rowContainer}>
                    <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
                    <View  style={styles.textContainer}>
                        <Text style={styles.price}>£{price}</Text>
                        <Text style={styles.title}
                              numberOfLines={1}>{rowData.title}</Text>
                    </View>
                    <View style={styles.separator}/>
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



var styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});

module.exports = SearchResult;