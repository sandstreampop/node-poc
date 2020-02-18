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

const Register = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { navigation } = props;

  cancelRegister = () => {
    navigation.navigate("HomeRT");
  };

  registerAccount = () => {
    if (!username) {
      Alert.alert("Fyll i ett användarnamn");
    } else if (!password | (password !== passwordConfirm)) {
      Alert.alert("Lösenorden matchar inte");
    } else {
      AsyncStorage.getItem(username, (err, result) => {
        if (result !== null) {
          Alert.alert(`${username} finns redan`);
        } else {
          AsyncStorage.setItem(username, password, (err, result) => {
            Alert.alert(`${username} är nu registrerad`);
            navigation.navigate("HomeRT");
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

      <TextInput
        style={styles.inputs}
        onChangeText={text => setPasswordConfirm(text)}
        value={passwordConfirm}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Bekräfta lösenord</Text>

      <TouchableHighlight
        onPress={() => registerAccount()}
        underlayColor="#31e981"
      >
        <Text style={styles.buttons}>Bli medlem</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Register;

Register.navigationOptions = {
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
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  buttons: { marginTop: 15, fontSize: 16 },
  labels: { paddingBottom: 10 }
});
