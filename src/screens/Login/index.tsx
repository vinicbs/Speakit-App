import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    NavigationScreenComponent,
    NavigationScreenProp,
    NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from 'src/config/routes'

interface LoginScreenProps {
    navigation: NavigationScreenProp<any>;
}

/**
 * The Login screen
 */
export default class LoginScreen extends React.Component<LoginScreenProps> {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props: LoginScreenProps) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login Screen</Text>
            </View>
        )
    }
}
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