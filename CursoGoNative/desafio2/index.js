import { AppRegistry } from "react-native";
import App from "~/routes";
import { name as appName } from "./app.json";
import Reactotron from "~/config/ReactotronConfig";

AppRegistry.registerComponent(appName, () => App);
