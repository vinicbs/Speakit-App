import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from 'src/screens/Home';
export var ROUTES;
(function (ROUTES) {
    ROUTES["RootMain"] = "RootMain";
    ROUTES["LoginScreen"] = "LoginScreen";
    ROUTES["HomeScreen"] = "HomeScreen";
})(ROUTES || (ROUTES = {}));
const MainStack = createStackNavigator({
    [ROUTES.HomeScreen]: {
        screen: HomeScreen
    }
});
const RootStack = createStackNavigator({
    [ROUTES.RootMain]: {
        screen: MainStack
    }
}, {
    mode: "modal",
    headerMode: "none"
});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
