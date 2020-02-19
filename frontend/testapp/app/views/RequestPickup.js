import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Alert } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import { Input, Button, ButtonGroup } from "react-native-elements";

const RequestPickup = props => {
  const { navigation } = props;

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const clearFields = () => {
    setMessage("");
    setName("");
    setEmail("");
  };

  const requestPickup = async () => {
    const uid = new Date().getUTCMilliseconds();

    if (!name | !email | !message) {
      return Alert.alert("Fill in all fields please");
    }
    let object = {
      name: name,
      email: email,
      message: message,
      id: uid
    };

    var requestsUnclaimed = await AsyncStorage.getItem("requests_unclaimed");
    console.log(requestsUnclaimed);

    const updatedData =
      requestsUnclaimed !== null
        ? requestsUnclaimed + JSON.stringify(object)
        : JSON.stringify(object);

    AsyncStorage.setItem("requests_unclaimed", updatedData, () => {
      AsyncStorage.getItem("requests_unclaimed", (err, result) => {
        console.log(`request created ${result}`);
      });
    });

    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <View>
      <HeaderContainer {...props} />
      <Input
        value={name}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <Input
        value={message}
        placeholder="Message"
        onChangeText={text => setMessage(text)}
      />
      <Input
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />

      <Button title="Request pickup" onPress={() => requestPickup()}></Button>
      <Button title="Clear" onPress={() => clearFields()}></Button>
    </View>
  );
};

export default RequestPickup;

RequestPickup.navigationOptions = {
  header: null
};
