import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Geojson, Marker } from "react-native-maps";

const MapDisplayPos = locationId => {
  const [longitude, setLong] = useState(-122.4324);
  const [latitude, setLat] = useState(37.78825);

  const fetchData = async locationId => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${locationId}&key=AIzaSyDsnDRHqIz6yOHu1xM5PkyG14gzrjoydIc`;
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      setLat(json.result.geometry.location.lat);
      setLong(json.result.geometry.location.lng);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(locationId.locationId);
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude
          }}
        />
      </MapView>
    </View>
  );
};

export default MapDisplayPos;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 300
  }
});
