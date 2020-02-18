import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Alert
} from "react-native";
import Header from "../sections/Header";

const Contact = props => {
  const { navigation } = props;

  const [message, setMessage] = useState("Skriv meddelande");
  const [name, setName] = useState("Ditt namn");
  const [email, setEmail] = useState("Din e-post");

  clearFields = () => {
    setMessage("");
    setName("");
    setEmail("");
  };

  sendMessage = () => {
    Alert.alert(message + ", " + name + ", " + email);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header {...props} />
      <TextInput
        style={styles.inputs}
        onChangeText={text => setName(text)}
        value={name}
      ></TextInput>
      <TextInput
        style={styles.multiInput}
        onChangeText={text => setMessage(text)}
        value={message}
        multiline={true}
        numberOfLines={4}
      ></TextInput>
      <TextInput
        style={styles.inputs}
        onChangeText={text => setEmail(text)}
        value={email}
      ></TextInput>
      <TouchableHighlight onPress={() => sendMessage()} underlayColor="#31e981">
        <Text style={styles.buttons}>Skicka</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => clearFields()} underlayColor="#31e981">
        <Text style={styles.buttons}>Återställ</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Contact;

Contact.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingBottom: "45%" },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  multiInput: {
    flex: 4,
    width: "80%",
    paddingTop: 20,
    margin: 15,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  buttons: { marginTop: 15, fontSize: 16 }
});
