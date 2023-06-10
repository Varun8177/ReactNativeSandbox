import React, { useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "../../constants";
import { Stack } from "expo-router";
import Footer from "../../components/product/Footer";

const Product = () => {
  const [refreshing, setRefreshing] = useState(false);
  const HandleRefresh = () => {};
  return (
    <SafeAreaView style={{ backgroundColor: "#419F7D", flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#419F7D" },
          headerShadowVisible: false,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity>
              <Image source={images.cartIcon} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={HandleRefresh} />
        }
        style={{ backgroundColor: "#419F7D", height: "100%" }}
      >
        <View style={styles.wrapper}>
          <Image source={images.noodles} style={styles.ProductImage} />
        </View>
        <View style={styles.DetailsWrapper}>
          <Text style={styles.description}>
            Rice Noodles with shrimps,egg,pork,choy,cabbage.Noodles fave or
            trying something completely new, we want your tastebuds to be your
            happy buds.
          </Text>
          <View style={styles.box(true)}>
            <View>
              <Text style={styles.title}>Noodles</Text>
              <Text>300g/530 kcal</Text>
            </View>
            <Text>1 portion</Text>
          </View>
          <View style={styles.box(false)}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={images.badge} />
              <View>
                <Text>Chin Club</Text>
                <Text>3.1 km from you</Text>
              </View>
            </View>
            <Text>ratings here</Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ProductImage: {
    width: 300,
    height: 300,
    marginTop: 30,
    zIndex: 10,
    borderRadius: 200,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  DetailsWrapper: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 1,
    marginTop: -150,
    borderRadius: 20,
    padding: 10,
    minHeight: 650,
  },
  description: {
    marginTop: 150,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
  },
  box: (bottom) => ({
    alignItems: bottom ? "flex-end" : "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
    paddingVertical: 20,
  }),
});
export default Product;
