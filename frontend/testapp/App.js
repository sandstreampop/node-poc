import * as React from "react";
import { StackNavigator } from "react-navigation";
import Home from "./app/views/Home";
import RequestPickup from "./app/views/RequestPickup";
import ClaimPickup from "./app/views/ClaimPickup";
import Register from "./app/views/Register";
import Login from "./app/views/Login";
import { ThemeProvider } from "react-native-elements";

//usin react navigation
const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  RequestPickupRT: {
    screen: RequestPickup
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  ClaimPickupRT: {
    screen: ClaimPickup
  }
});

const theme = {
  Button: {
    containerStyle: {
      margin: 10
    },
    titleStyle: {
      color: "white"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyRoutes></MyRoutes>
    </ThemeProvider>
  );
}
