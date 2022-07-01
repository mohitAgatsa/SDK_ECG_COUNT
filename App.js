import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loadingscreen from "./src/screens/Loadingscreen";
import Login from "./src/screens/Login";
import Data from "./src/screens/Data";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Data"
          component={Data}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "SDK ECG COUNT",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <Data />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
