import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
            
            <Header
                    backgroundColor={'#56A0FE'}
                    centerComponent={{
                    text: 'Story Hub',
                    style: { color: '#fff', fontSize: 40 }
                }}
            />
            <Text style = {styles.dummyText}>Read Story</Text>
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
    dummyText: {
        fontSize: 20,
        marginTop: 300
    }
})