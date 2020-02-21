import "react-native-gesture-handler";
import * as React from "react";
import Home from "./app/views/Home";
import RequestPickup from "./app/views/RequestPickup";
import ClaimPickup from "./app/views/ClaimPickup";
import Register from "./app/views/Register";
import Login from "./app/views/Login";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";

const theme = {
  Header: {
    color: "white"
  },
  Button: {
    containerStyle: {
      margin: 10
    },
    titleStyle: {
      color: "white"
    }
  }
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeRT">
          <Stack.Screen name="HomeRT" component={Home} />
          <Stack.Screen name="RequestPickupRT" component={RequestPickup} />
          <Stack.Screen name="ClaimPickupRT" component={ClaimPickup} />
          <Stack.Screen name="RegisterRT" component={Register} />
          <Stack.Screen name="LoginRT" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
