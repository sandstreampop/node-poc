import React, { useState, useEffect, useContext } from "react";
import { AsyncStorage, Alert, Image } from "react-native";

import { Header, Text, ThemeContext } from "react-native-elements";

const HeaderContainer = props => {
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

  const toggleUser = () => {
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
    <Header
      rightComponent={
        <Text style={{ color: "white" }} onPress={() => toggleUser()}>
          {display}
        </Text>
      }
    />
  );
};

export default HeaderContainer;
