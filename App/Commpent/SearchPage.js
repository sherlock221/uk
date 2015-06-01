/**
 * Created by abjia on 15-5-29.
 */

var React = require("react-native");
var SearchResult = require('./SearchResult');

function urlForQueryAndPage(key, value, pageNumber) {
    var data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[key] = value;

    var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return 'http://api.nestoria.co.uk/api?' + querystring;
};

var {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    Component

    }= React;


var SearchPage = React.createClass({

    //初始化
    getInitialState: function () {
        console.log("init...");

        return {
            searchString: "london",
            isLoading: false,
            message : ""
        }

    },

    //查询
    onSearchPressed : function(){
        var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    },

    _handleResponse :function(response){
        this.setState({ isLoading: false , message: '' });
        if (response.application_response_code.substr(0, 1) === '1') {
            //console.log('Properties found: ' + response.listings.length);

            this.props.navigator.push({
                title: 'Results',
                component: SearchResult,
                passProps: {listings: response.listings}
            });

        } else {
            this.setState({ message: 'Location not recognized; please try again.'});
        }
    },

    _executeQuery(query) {
        console.log(query);
        this.setState({ isLoading: true });


        fetch(query)
            .then(function(response) {
                return response.json()
            })
            .then(json => this._handleResponse(json.response))
            .catch(function(ex) {
                console.log('parsing failed', ex)
                    this.setState({
                        isLoading: false,
                        message: 'Something bad happened ' + error
                    })
            });


    },


    //改变
    onSearchTextChanged : function(event){
        console.log('onSearchTextChanged');

        this.setState({
            searchString : event.nativeEvent.text
        });

    },

    //渲染部分
    render: function () {

        //spinner
        var spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                hidden='true'
                size='large'/> ) :
            ( <View/>);






        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
                </Text>

                <Text style={styles.description}>
                    Search by place-name, postcode or search near your location.
                </Text>

                <View style={styles.flowRight}>
                    <TextInput onSearchTextChanged={this.onSearchTextChanged.bind(this)} style={styles.searchInput} value={this.state.searchString}
                               placeholder='Search via name or postcode'/>
                    <TouchableHighlight  onPress={this.onSearchPressed.bind(this)}  style={styles.button} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight   style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>

                <Image source={require('image!house')} style={styles.image}/>
                {spinner}


                <Text style={styles.description}>{this.state.message}</Text>



            </View>

        );

    }

});


var styles = StyleSheet.create({

    image: {
        width: 217,
        height: 138
    },

    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'

    },
    searchInput: {

        height: 36,

        padding: 4,

        marginRight: 5,

        flex: 4,

        fontSize: 18,

        borderWidth: 1,

        borderColor: '#48BBEC',

        borderRadius: 8,

        color: '#48BBEC'

    },

    button: {

        height: 36,

        flex: 1,

        flexDirection: 'row',

        backgroundColor: '#48BBEC',

        borderColor: '#48BBEC',

        borderWidth: 1,

        borderRadius: 8,

        marginBottom: 10,

        alignSelf: 'stretch',

        justifyContent: 'center'

    },

    buttonText: {

        fontSize: 18,

        color: 'white',

        alignSelf: 'center'

    },

    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'

    }
});


module.exports = SearchPage;