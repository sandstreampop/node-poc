import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Text } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import { ListItem, Button } from "react-native-elements";

const ClaimPickup = props => {
  const clearAll = () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert("success"));
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let json = await AsyncStorage.getItem("requests_unclaimed");
        json = JSON.parse(json);
        setJsonData(json);
        if (json !== null) {
          const arr = [];
          arr.push(json);
          setData(arr);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View>
      <HeaderContainer {...props} />
      {data.map((l, i) => (
        <ListItem
          key={i}
          title={`Name: ${l.name} Email: ${l.email}`}
          subtitle={l.message}
          bottomDivider
        />
      ))}
      <Button title="Clear all" onPress={() => clearAll()}></Button>
    </View>
  );
};

export default ClaimPickup;

ClaimPickup.navigationOptions = {
  header: null
};
