import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    NavigationScreenComponent,
    NavigationScreenProp,
    NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from 'src/config/routes'

interface HomeScreenProps {
    navigation: NavigationScreenProp<any>;
}

/**
 * The Home screen
 */
export default class HomeScreen extends React.Component<HomeScreenProps> {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props: HomeScreenProps) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>
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