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
    ListView,
    TextInput,
    Image,
    TouchableHighlight,
    TabBarIOS,
    SwitchIOS,
    VibrationIOS,
    DatePickerIOS,
    SliderIOS
    } = React;

var AwesomeProject = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            movies: [],
            loaded: false,
            input: "kk",
            selectedTab: "Tab1",
            switchValue: false,
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
            sliderValue: 0
        }
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function() {
        var movies = this.state.movies;

        for (var i=0; i < 10; i++) {
            var movie = {};
            movie.name = "name" + i;
            movie.detail = "detail" + i;
            movies.push(movie);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(movies),
            movies: movies,
            loaded: true,
        });
    },
    _onPressButton: function () {
        VibrationIOS.vibrate();
        alert(this.state.input);
    },
    onDateChange: function(date) {
        this.setState({date: date});
    },
    onEndReached: function (argument) {
        this.fetchData();
    },
    render: function() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    name="Tab1"
                    title="Tab1"
                    selected={this.state.selectedTab === 'Tab1'}
                    icon={{uri:'favorites'}}
                    onPress={() => {
              this.setState({
                  selectedTab: 'Tab1',
              });
          }}>
                    <View style={styles.container}>
                        <TextInput
                            style={{height: 40, borderColor: 'red', borderWidth: 1}}
                            onChangeText={(text) => this.setState({input: text})}>
                        </TextInput>
                        <Text>{'user input: ' + this.state.input}</Text>
                        <TouchableHighlight onPress={this._onPressButton}>
                            <Image
                                style={{height: 40, width: 40}}
                                source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}>
                            </Image>
                        </TouchableHighlight>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderMovie}
                            style={styles.listView}
                            onEndReached={this.onEndReached}>
                        </ListView>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    name="Tab2"
                    title="Tab2"
                    selected={this.state.selectedTab === 'Tab2'}
                    icon={{uri:'favorites'}}
                    onPress={() => {
              this.setState({
                  selectedTab: 'Tab2',
              });
          }}>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Tab2
                        </Text>
                        <SwitchIOS
                            onValueChange={(value) => this.setState({switchValue: value})}
                            style={{marginBottom: 10}}
                            value={this.state.switchValue}>
                        </SwitchIOS>
                        <SliderIOS
                            style={styles.slider}
                            onValueChange={(value) => this.setState({sliderValue: value})}>
                        </SliderIOS>
                        <DatePickerIOS
                            date={this.state.date}
                            mode="datetime"
                            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                            onDateChange={this.onDateChange}>
                        </DatePickerIOS>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },
    renderMovie: function(movie) {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js{'\n'}
                    Press Cmd+R to reload
                </Text>
                <Text style={styles.instructions}>
                    {movie.name}
                    {movie.detail}
                </Text>
                <Image style={{height: 40, width: 40}}
                       source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}>
                </Image>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    },
    listView: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    },
});

AppRegistry.registerComponent('uk', () => AwesomeProject);