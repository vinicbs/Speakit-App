import { createAppContainer, createStackNavigator } from "react-navigation";
import StartScreen from 'src/screens/Start';
import HomeScreen from 'src/screens/Home';
import LoginScreen from 'src/screens/Login';
export var ROUTES;
(function (ROUTES) {
    ROUTES["RootMain"] = "RootMain";
    ROUTES["StartScreen"] = "StartScreen";
    ROUTES["LoginScreen"] = "LoginScreen";
    ROUTES["HomeScreen"] = "HomeScreen";
})(ROUTES || (ROUTES = {}));
const MainStack = createStackNavigator({
    [ROUTES.StartScreen]: {
        screen: StartScreen
    },
    [ROUTES.LoginScreen]: {
        screen: LoginScreen
    },
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
