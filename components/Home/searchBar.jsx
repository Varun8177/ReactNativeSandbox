import React from "react";
import { Image, View, TextInput } from "react-native";
import { images } from "../../constants";

export default function SearchBar() {
  return (
    <View>
      <Image source={images.searchIcon} />
      <TextInput />
    </View>
  );
}
