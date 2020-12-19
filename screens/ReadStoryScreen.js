import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            search : '',
            dataSource:[],
            allStories:[]
        }
    }

    retrieveStories() {
        var allStories = []
        db.collection("stories")
        .get()
        .then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                allStories.push(doc.data())
            })
            .catch(function(error) {
            console.log("Error getting documents: ", error);
            });
            this.setState({
                allStories: allStories
            })
        })
      };

    componentDidMount() {
        this.retrieveStories()
    }

    searchFilterFunction(text) {
        //https://aboutreact.com/react-native-search-bar-filter-on-listview/
        const searchData = this.state.allStories.filter((item)=> {
            const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: searchData,
            search: text,
        });
    }

    render() {
        return (
            <View style = {styles.container}>
            
            <Header
                    backgroundColor = {'#56A0FE'}
                    centerComponent = {{
                        text: 'Story Hub',
                        style: { color: '#fff', fontSize: 40 }
                }}
            />
            <SearchBar
            placeholder = "Search here..."
            value = {this.state.search}
            onChangeText = {text =>
                this.searchFilterFunction(text)
            }
            onClear = {text =>
                this.searchFilterFunction('')
            }
            containerStyle = {{justifyContent: 'center', width: 350, marginTop: 20}}
            cancelIconColor = "#c6c6c6" //helps to clear the text, it is not there by default
            lightTheme = {true} //matches with surroundings
            />
            <ScrollView>
            <View>
            {this.state.search === ""
                ? this.state.allStories.map((item)=>(
                      <View style={styles.stories}>
                        <Text style = {{
                            fontSize: 20,
                            color: '#236655'
                            }}>
                          {item.title}
                        </Text>
                        <Text style = {{
                            fontSize: 15,
                            color: '#236655'
                            }}>
                          By {item.author}
                        </Text>
                      </View>
                    ))
                  : this.state.dataSource.map((item)=>(
                    <View style={styles.searchStories}>
                      <Text style = {{
                          color: '#317A7D',
                          fontSize: 20
                          }}>
                       {item.title}
                      </Text>
                      <Text style = {{
                            fontSize: 15,
                            color: '#317A7D'
                            }}>
                       By {item.author}
                      </Text>
                    </View>
                  ))}
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4EB9E6'
    },
    stories: {
        padding: 20,
        borderWidth: 2,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#4EE6C0',
    },
    searchStories: {
        padding: 20,
        borderWidth: 2,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#62F7FC'
    }
})