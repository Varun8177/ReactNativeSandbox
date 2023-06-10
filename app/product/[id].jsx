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
import { Stack, useSearchParams } from "expo-router";
import Footer from "../../components/product/Footer";

const Product = () => {
  const [refreshing, setRefreshing] = useState(false);
  const params = useSearchParams();
  const data = [
    {
      id: 0,
      title: "Noodles",
      price: "$7.2",
      description:
        "Rice Noodles with shrimps,egg,pork,choy,cabbage.Noodles fave or trying something completely new, we want your tastebuds to be your happy buds",
      nutrition: "300g/530 kcal",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      title: "Sushi Roll",
      price: "$10.5",
      description:
        "Fresh sushi roll with a variety of ingredients like salmon, avocado, cucumber, and crab meat. Served with soy sauce and wasabi.",
      nutrition: "200g/420 kcal",
      image:
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
      id: 2,
      title: "Burger",
      price: "$8.9",
      description:
        "Juicy beef patty topped with lettuce, tomato, cheese, and special sauce. Served with crispy fries on the side.",
      nutrition: "250g/550 kcal",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 3,
      title: "Salad",
      price: "$6.5",
      description:
        "Mixed greens with cherry tomatoes, cucumbers, onions, and a choice of dressing (ranch, balsamic, or honey mustard).",
      nutrition: "150g/180 kcal",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
    {
      id: 4,
      title: "Pizza",
      price: "$12.99",
      description:
        "Delicious pizza topped with mozzarella cheese, pepperoni, mushrooms, bell peppers, and olives. Perfect for sharing!",
      nutrition: "350g/800 kcal",
      image:
        "https://images.unsplash.com/photo-1591985666643-1ecc67616216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 5,
      title: "Grilled Salmon",
      price: "$14.5",
      description:
        "Freshly grilled salmon fillet marinated in a lemon-dill sauce. Served with roasted vegetables and a side of mashed potatoes.",
      nutrition: "200g/450 kcal",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
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
          <Image
            source={{ uri: data[params.id].image }}
            style={styles.ProductImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.DetailsWrapper}>
          <Text style={styles.description}>{data[params.id].description}</Text>
          <View style={styles.box(true)}>
            <View>
              <Text style={styles.title}>{data[params.id].title}</Text>
              <Text>{data[params.id].nutrition}</Text>
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
