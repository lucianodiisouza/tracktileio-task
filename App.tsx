import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { Home } from "./src/screens/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.safeArea}>
                <Home />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    safeArea: {
        width: "100%",
        height: "100%",
    },
});
