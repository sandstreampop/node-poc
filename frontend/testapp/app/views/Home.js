import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";

const Home = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Header {...props} />
      <Hero />
      <Menu navigate={navigation} />
    </View>
  );
};

export default Home;

Home.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
