import { Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { images } from "../constants"
import { useState } from "react";
import { StyleSheet } from "react-native";
import SearchBar from "../components/Home/searchBar";


export default function Home() {
    const [refreshing, setRefreshing] = useState(false)
    const HandleRefresh = () => { }
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                title: "",
                headerLeft: () => (
                    <TouchableOpacity>
                        <Image source={images.hamburgerIcon} resizeMode="contain" />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Image source={images.cartIcon} />
                    </TouchableOpacity>
                )
            }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={HandleRefresh} />
                }
            >
                <Text style={styles.Heading}>Hi James</Text>
                <Text>What do you want to order today?</Text>
                <SearchBar />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Heading: {
        fontWeight: "500",
        color: "#000000",
        fontSize: 40
    },
});