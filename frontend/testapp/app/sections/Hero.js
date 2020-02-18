import React from "react";
import { StyleSheet, Image } from "react-native";

const Hero = () => {
  return (
    <Image
      style={styles.heroStyle}
      source={require("./img/watches-hero.jpg")}
    />
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
