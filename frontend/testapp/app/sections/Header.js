import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Header = ({ message }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const display = loggedIn ? message : "Sample User";

  return (
    <View style={styles.headStyle}>
      <Image style={styles.logoStyle} source={require("./img/clock-48.png")} />
      <Text style={styles.headText} onPress={() => setLoggedIn(!loggedIn)}>
        {display}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: "#35605a",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000"
  },
  logoStyle: {
    width: 20,
    height: 20,
    marginLeft: 20
  }
});
