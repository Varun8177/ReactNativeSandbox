import React from "react";
import { Image, View, TextInput, StyleSheet } from "react-native";
import { images } from "../../constants";

export default function SearchBar() {
  return (
    <View style={styles.SearchWrapper}>
      <Image source={images.searchIcon} style={styles.SearchIcon} />
      <TextInput placeholder="search" style={styles.searchBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchWrapper: {
    width: 332,
    height: 50,
    backgroundColor: "#F4E4CD",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    borderRadius: 10,
  },
  SearchIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  searchBar: {
    width: 300,
    height: 50,
  },
});
