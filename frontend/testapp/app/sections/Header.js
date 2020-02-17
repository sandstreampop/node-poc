import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = ({ message }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const display = loggedIn ? message : "Sample User";

  return (
    <View style={styles.headStyle}>
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
    fontSize: 20
  },
  headStyle: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: "#35605a"
  }
});
