import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

const Menu = props => {
  const { navigate } = props;

  return (
    <View>
      <Button title="Home" onPress={() => navigate.navigate("HomeRT")} />
      <Button
        title="Request pickup"
        onPress={() => navigate.navigate("RequestPickupRT")}
      />
      <Button
        title="Register"
        onPress={() => navigate.navigate("RegisterRT")}
      />
      <Button
        title="Claim pickup"
        onPress={() => navigate.navigate("ClaimPickupRT")}
      />
    </View>
  );
};

export default Menu;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#35605a" },
//   buttonRow: {
//     flex: 2,
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: "#ffffff"
//   },
//   buttonStyles: {
//     backgroundColor: "#35605a",
//     height: "50%",
//     width: "50%",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   buttonText: { color: "#ffffff", fontSize: 18 }
// });
