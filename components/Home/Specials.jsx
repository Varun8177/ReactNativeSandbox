import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SpecialCard from "../cards/SpecialCard";

const Specials = () => {
  return (
    <View>
      <Text style={styles.Heading}>Specials</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <SpecialCard />}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontWeight: "500",
    color: "#000000",
    fontSize: 40,
    marginTop: 30,
  },
  Wrapper: {
    padding: 10,
  },
});

export default Specials;
