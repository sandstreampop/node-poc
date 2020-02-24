import React, { Component } from "react";
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import MapDisplayPos from "../sections/MapDisplayPos";

export default class ClaimModal extends Component {
  render() {
    if (this.props.item === null) return null;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.onDismiss();
          }}
        >
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <MapDisplayPos locationId={this.props.item.location.place_id} />
              <Text>{this.props.item.name}</Text>
              <TouchableHighlight
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.onDismiss();
                }}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "transparent"
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#34495e"
  },
  buttonContainer: {
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: "#2c3e50",
    borderRadius: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#ecf0f1",
    fontWeight: "700"
  }
});
