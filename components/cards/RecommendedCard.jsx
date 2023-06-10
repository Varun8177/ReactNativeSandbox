import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { images } from "../../constants";

const RecommendedCard = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={images.cake} style={styles.productImage} />
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
