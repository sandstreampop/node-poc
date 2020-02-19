import React, { useState } from "react";
import { View, Alert } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import { Input, Button, ButtonGroup } from "react-native-elements";

const RequestPickup = props => {
  const { navigation } = props;

  const [message, setMessage] = useState("Skriv meddelande");
  const [name, setName] = useState("Ditt namn");
  const [email, setEmail] = useState("Din e-post");

  clearFields = () => {
    setMessage("");
    setName("");
    setEmail("");
  };

  requestPickup = () => {
    const uid = new Date().getUTCMilliseconds();

    let object = {
      name: name,
      email: email,
      message: message,
      id: uid
    };

    AsyncStorage.setItem("Requests", JSON.stringify(object), () => {
      AsyncStorage.getItem("Request", (err, result) => {
        console.log(`request created ${result}`);
      });
    });
  };

  return (
    <View>
      <HeaderContainer {...props} />
      <Input placeholder="Name" onChangeText={text => setName(text)} />
      <Input placeholder="Message" onChangeText={text => setMessage(text)} />
      <Input placeholder="Email" onChangeText={text => setEmail(text)} />

      <Button title="Request pickup" onPress={() => requestPickup()}></Button>
      <Button title="Clear" onPress={() => clearFields()}></Button>
    </View>
  );
};

export default RequestPickup;

RequestPickup.navigationOptions = {
  header: null
};
