import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const cancelLogin = () => {
    Alert.alert("Inloggning avbruten");
    navigation.navigate("HomeRT");
  };

  const login = () => {
    if (!username) {
      Alert.alert("Fyll i ett användarnamn");
    } else if (!password) {
      Alert.alert("Lösenorden matchar inte");
    } else {
      AsyncStorage.getItem("userLoggedIn", (err, result) => {
        if (result !== "none") {
          Alert.alert("Någon redan inloggad");
          navigation.navigate("HomeRT");
        } else {
          AsyncStorage.getItem(username, (err, result) => {
            if (result !== null) {
              if (result !== password) {
                Alert.alert("Fel lösenord");
              } else {
                AsyncStorage.setItem(
                  "userLoggedIn",
                  username,
                  (err, result) => {
                    Alert.alert(`${username} inloggad`);
                    navigation.navigate("HomeRT");
                  }
                );
              }
            } else {
              Alert.alert(`Finns ingen sådan användare: ${username}`);
            }
          });
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>Användarnamn</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Lösenord</Text>

      <TouchableHighlight onPress={() => login()} underlayColor="#31e981">
        <Text style={styles.buttons}>Logga in</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => cancelLogin()} underlayColor="#31e981">
        <Text style={styles.buttons}>Avbryt inloggning</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;

Login.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%",
    paddingTop: "10%"
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10,
    margin: 15,
    height: 5,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  buttons: { marginTop: 15, fontSize: 16 },
  labels: { paddingBottom: 10 }
});
