import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, ListItem } from "react-native-elements";

export default class PlacesFindPos extends Component {
  state = {
    destination: null,
    predictions: []
  };

  async onChangeDestination(destination) {
    this.setState({ destination });
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyDsnDRHqIz6yOHu1xM5PkyG14gzrjoydIc&input=${destination}`;
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({
        predictions: json.predictions
      });
    } catch (error) {
      console.log(error);
    }
  }

  onPress(prediction) {
    this.props.onChangeValue(prediction);
    this.state.destination = prediction.description;
    this.state.predictions = [];
  }
  render() {
    const predictions = this.state.predictions.map(prediction => (
      <ListItem
        key={prediction.id}
        title={prediction.description}
        bottomDivider
        onPress={() => this.onPress(prediction)}
      />
    ));

    return (
      <View>
        <Input
          placeholder="Enter destination"
          value={this.state.destination}
          onChangeText={destination => this.onChangeDestination(destination)}
        ></Input>
        {predictions}
      </View>
    );
  }
}
