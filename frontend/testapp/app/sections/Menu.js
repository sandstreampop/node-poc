import React, { useState } from "react";
import { Text, StyleSheet, View, Alert, TouchableOpacity } from "react-native";

const Menu = props => {
  const { navigate } = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("HomeRT")}
        >
          <Text style={styles.buttonText}>Hem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("ContactRT")}
        >
          <Text style={styles.buttonText}>Kontakt</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("RegisterRT")}
        >
          <Text style={styles.buttonText}>Registera dig</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("ContactRT")}
        >
          <Text style={styles.buttonText}>Poljot</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("HomeRT")}
        >
          <Text style={styles.buttonText}>Strela</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigate.navigate("ContactRT")}
        >
          <Text style={styles.buttonText}>Girard-Perregaux</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#35605a" },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ffffff"
  },
  buttonStyles: {
    backgroundColor: "#35605a",
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: { color: "#ffffff", fontSize: 18 }
});
