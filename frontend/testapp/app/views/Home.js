import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import Menu from "../sections/Menu";

const Home = props => {
  return (
    <View>
      <HeaderContainer {...props} />
      <Menu />
    </View>
  );
};

export default Home;

Home.navigationOptions = {
  header: null
};
