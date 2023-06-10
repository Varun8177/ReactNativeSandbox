import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RecommendedCard from "../cards/RecommendedCard";

const Recommended = () => {
  return (
    <View>
      <Text style={styles.Heading}>Recommended</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <RecommendedCard />}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontWeight: "500",
    color: "#000000",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Recommended;
