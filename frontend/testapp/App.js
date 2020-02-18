import * as React from "react";
import { StackNavigator } from "react-navigation";
import Home from "./app/views/Home";
import Contact from "./app/views/Contact";
import Register from "./app/views/Register";
import Login from "./app/views/Login";

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
});

export default function App() {
  return <MyRoutes />;
}
