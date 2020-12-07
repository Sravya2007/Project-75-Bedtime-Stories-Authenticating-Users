import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    backgroundColor={'#56A0FE'}
                    centerComponent={{
                    text: 'Story Hub',
                    style: { color: '#fff', fontSize: 40 },
                }}
            />
                <TextInput style = {styles.inputBox} placeholder = "Title of the story" backgroundColor= "#4EE6C0" color = "#236655"/>
                <TextInput style = {styles.inputBox} placeholder = "Author" backgroundColor= "#56FEA5" color = "#2B8053"/>
                <TextInput style = {styles.multilineBox} placeholder = "Write the story here..." multiline = {true}/>

                <TouchableOpacity style = {styles.button}><Text style = {styles.buttonText}>Submit</Text></TouchableOpacity>
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
    inputBox:{
        width: 350,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    },
    multilineBox: {
        width: 350,
        height: 300,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 30,
        textAlign: 'center',
        backgroundColor: '#62F7FC',
        color: '#317A7D'
    },
    button: {
        backgroundColor: '#AEFAFD',
        marginTop: 15,
        width: 150,
        height: 50
    },
    buttonText:{
        fontSize: 15,
        alignSelf: 'center',
        margin: 15,
        color: '#317A7D'
    },
})