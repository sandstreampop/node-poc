import React from "react";
import { Text, View } from "react-native";
import Header from "../sections/Header";

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Header message={"Klicka för att logga in"} />
      </View>
    );
  }
}
