import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import LoginScreen from "./LoginScreen";
import { useNavigation } from "expo-router";

export default function SplashScreen() {
    const [showLogin, setShowLogin] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 1 ? prev + 0.1 : 1));
        }, 300);
        return () => clearInterval(interval);
    }, []);

    if (showLogin) {
        return <LoginScreen />;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
            <Text style={styles.title}>Health app</Text>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    image: {
        height: 80,
        width: 80
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    progressContainer: {
        width: 200,
        height: 10,
        backgroundColor: "#E0E0E0",
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 20
    },
    progressBar: {
        height: "100%",
        backgroundColor: "#007bff",
    }
});