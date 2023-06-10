import { Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { images } from "../constants"
import { useState } from "react";
import { StyleSheet } from "react-native";
import SearchBar from "../components/Home/searchBar";
import Specials from "../components/Home/Specials";
import Recommended from "../components/Home/Recommended";
import Footer from "../components/Home/Footer";


export default function Home() {
    const [refreshing, setRefreshing] = useState(false)
    const HandleRefresh = () => { }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', paddingLeft: 20, flex: 1 }}>
            <Stack.Screen options={{
                headerShadowVisible: false,
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
                ),

            }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={HandleRefresh} />
                }
            >
                <View>
                    <Text style={styles.Heading}>Hi Varun</Text>
                    <Text >What do you want to order today?</Text>
                    <SearchBar />
                    <Specials />
                    <Recommended />
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Heading: {
        fontWeight: "500",
        color: "#000000",
        fontSize: 40,
    }
});