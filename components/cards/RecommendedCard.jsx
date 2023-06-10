import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { images } from "../../constants";

const RecommendedCard = ({ data }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        source={{ uri: data }}
        style={styles.productImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: { borderRadius: 20, overflow: "hidden" },
  productImage: {
    width: 100,
    height: 80,
  },
});

export default RecommendedCard;
