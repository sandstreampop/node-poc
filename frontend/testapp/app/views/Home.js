import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message={"Klicka för att logga in"} />
        <Hero />
        <Text style={styles.headText}>Din enhet: {Platform.OS}</Text>
        <Text style={{ flex: 4 }}>Grand Seiko</Text>
        <Text style={{ flex: 4 }}>Poljot de Luxe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
