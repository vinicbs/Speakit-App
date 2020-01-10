import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
/**
 * The Home screen
 */
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    render() {
        return (<View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>
            </View>);
    }
}
HomeScreen.navigationOptions = ({ navigation, screenProps }) => ({
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
