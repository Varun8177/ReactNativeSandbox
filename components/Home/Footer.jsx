import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { images } from "../../constants";

const Footer = () => {
  return (
    <View style={styles.wrapper}>
      {[images.homeIcon, images.walletIcon, images.profileIcon].map((item) => (
        <TouchableOpacity key={item} style={styles.btn}>
          <Image source={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
    height: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor: "#F4E4CD",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#F4E4CD",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: 2,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
export default Footer;
