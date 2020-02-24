import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Text } from "react-native";
import HeaderContainer from "../sections/HeaderContainer";
import { ListItem, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import ClaimModal from "../sections/ClaimModal";

const ClaimPickup = props => {
  const navigation = useNavigation();

  const clearAll = () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert("success"));
  };

  const [data, setData] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onClickedItem = item => {
    setClickedItem(item);
    setModalVisible(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let json = await AsyncStorage.getItem("requests_unclaimed");
        json = JSON.parse(json);

        if (json !== null) {
          setData(json["requests"]);
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
          subtitle={`Location: ${l.location.description}`}
          bottomDivider
          onPress={() => onClickedItem(l)}
        />
      ))}
      <ClaimModal
        modalVisible={modalVisible}
        item={clickedItem}
        onDismiss={() => setModalVisible(false)}
      />
      <Button title="Clear all" onPress={() => clearAll()}></Button>
    </View>
  );
};

export default ClaimPickup;

ClaimPickup.navigationOptions = {
  header: null
};
