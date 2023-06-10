import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 20 }}>Price: $9.20</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 70,
    right: 0,
    left: 0,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  btn: { backgroundColor: "#419F7D", padding: 10, borderRadius: 10 },
});

export default Footer;
