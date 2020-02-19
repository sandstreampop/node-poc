import React, { useState, useEffect } from "react";
import { StyleSheet, View, AsyncStorage, Alert, Image } from "react-native";

import { Header, Text, MyCustomRightComponent } from "react-native-elements";

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
    <Header
      rightComponent={<Text onPress={() => toggleUser()}>{display}</Text>}
    />
  );
};

export default HeaderContainer;

// const styles = StyleSheet.create({
//   headText: {
//     textAlign: "right",
//     color: "#ffffff",
//     fontSize: 20,
//     flex: 1
//   },
//   headStyle: {
//     paddingTop: 60,
//     paddingBottom: 10,
//     paddingRight: 10,
//     backgroundColor: "#35605a",
//     flex: 1,
//     flexDirection: "row",
//     borderBottomWidth: 2,
//     borderColor: "#000000"
//   },
//   logoStyle: {
//     width: 20,
//     height: 20,
//     marginLeft: 20
//   }
// });
