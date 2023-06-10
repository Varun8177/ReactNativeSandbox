import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { images } from "../../constants";
import { useRouter } from "expo-router";

const SpecialCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.Wrapper}
      onPress={() => router.push(`/product/1`)}
    >
      <Image
        source={images.noodles}
        style={styles.ProductImage}
        resizeMode="cover"
      />
      <Text style={styles.ProductTitle}>Noodles</Text>
      <Text style={styles.ProductSubText}>$7.2</Text>
      <Text style={styles.SeeAll}>See Details</Text>
      <Image source={images.arrow} resizeMode="contain" style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 300,
    width: 220,
    backgroundColor: "#F4E4CD",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    marginLeft: 30,
    borderTopLeftRadius: 100,
  },
  ProductImage: {
    width: 200,
    height: 200,
    position: "absolute",
    top: -10,
    left: -30,
    zIndex: 10,
    borderColor: "#419F7D",
    borderWidth: 2,
    borderRadius: 100,
  },
  ProductTitle: {
    position: "absolute",
    bottom: 70,
    left: 20,
    fontSize: 30,
    fontWeight: 700,
  },
  ProductSubText: {
    position: "absolute",
    bottom: 40,
    left: 20,
    fontSize: 20,
    fontWeight: 400,
  },
  SeeAll: {
    position: "absolute",
    bottom: 10,
    left: 20,
    fontSize: 15,
    fontWeight: 400,
  },
  arrow: {
    position: "absolute",
    bottom: 10,
    right: 20,
  },
});

export default SpecialCard;
