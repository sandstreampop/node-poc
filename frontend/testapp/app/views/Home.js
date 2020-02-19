import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import Menu from "../sections/Menu";

const Home = props => {
  const { navigation } = props;

  return (
    <View>
      <HeaderContainer {...props} />
      <Menu navigate={navigation} />
    </View>
  );
};

export default Home;

Home.navigationOptions = {
  header: null
};
