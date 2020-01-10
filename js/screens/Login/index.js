import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
/**
 * The Login screen
 */
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    render() {
        return (<View style={styles.container}>
                <Text style={styles.title}>Login Screen</Text>
            </View>);
    }
}
LoginScreen.navigationOptions = ({ navigation, screenProps }) => ({
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
    }
});
