import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate("HomeRT")} />
      <Button
        title="Request pickup"
        onPress={() => navigation.navigate("RequestPickupRT")}
      />
      <Button
        title="Register"
        onPress={() => navigate.navigate("RegisterRT")}
      />
      <Button
        title="Claim pickup"
        onPress={() => navigation.navigate("ClaimPickupRT")}
      />
    </View>
  );
};

export default Menu;
