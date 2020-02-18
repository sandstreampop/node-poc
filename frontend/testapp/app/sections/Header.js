import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
  Image
} from "react-native";

const Header = props => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setLoggedInUser] = useState(false);
  const { navigation } = props;
  const display = isLoggedIn ? user : "Logga in";

  useEffect(() => {
    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      if (result === "none") {
        console.log("NONE");
      } else if (result === null) {
        AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
          console.log("Set user to NONE");
        });
      } else {
        setLoggedIn(true);
        setLoggedInUser(result);
      }
    });
  });

  toggleUser = () => {
    if (isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {});
      setLoggedIn(false);
      setLoggedInUser(false);
      Alert.alert("Du är nu utloggad");
    } else {
      navigation.navigate("LoginRT");
    }
  };

  return (
    <View style={styles.headStyle}>
      <Image style={styles.logoStyle} source={require("./img/clock-48.png")} />
      <Text style={styles.headText} onPress={() => toggleUser()}>
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
