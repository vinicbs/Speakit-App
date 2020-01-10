import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
/**
 * The Start screen
 */
export default class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    render() {
        return (<View style={styles.container}>
                <Text style={styles.title}>Start Screen</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>HOME</Text>
                </TouchableOpacity>
            </View>);
    }
}
StartScreen.navigationOptions = ({ navigation, screenProps }) => ({
    header: null
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    button: {
        marginTop: 100,
        borderWidth: 1,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 }
    }
});
