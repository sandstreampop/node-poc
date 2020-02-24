import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Alert } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import { Input, Button, ButtonGroup } from "react-native-elements";
import PlacesFindPos from "../sections/PlacesFindPos";

const RequestPickup = props => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(null);

  const clearFields = () => {
    setMessage("");
    setName("");
    setEmail("");
    setLocation("");
  };

  const requestPickup = async () => {
    const uid = new Date().getUTCMilliseconds();

    if (!name | !email | !message) {
      return Alert.alert("Fill in all fields please");
    }

    let jsonStr;
    var requestsUnclaimed = await AsyncStorage.getItem("requests_unclaimed");
    if (requestsUnclaimed !== null) {
      jsonStr = requestsUnclaimed;
    } else {
      jsonStr = '{"requests":[]}';
    }

    var previousRequests = JSON.parse(jsonStr);

    let newRequest = {
      name: name,
      email: email,
      message: message,
      location: location,
      id: uid
    };

    previousRequests["requests"].push(newRequest);
    const updatedData = JSON.stringify(previousRequests);

    AsyncStorage.setItem("requests_unclaimed", updatedData, () => {
      AsyncStorage.getItem("requests_unclaimed", (err, result) => {
        // console.log(`request created ${result}`);
      });
    });

    setMessage("");
    setName("");
    setEmail("");
    setLocation("");
  };

  return (
    <View>
      <View>
        <HeaderContainer {...props} />
        <PlacesFindPos
          value={location}
          onChangeValue={location => setLocation(location)}
        />
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
    </View>
  );
};

export default RequestPickup;

RequestPickup.navigationOptions = {
  header: null
};
