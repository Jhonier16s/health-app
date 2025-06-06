import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { useNavigation } from "expo-router";
import LoginScreen from "./LoginScreen";
import * as Animatable from "react-native-animatable";
import { Easing } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
    const [showLogin, setShowLogin] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    useEffect(() => {
        const timer = setTimeout(() => setShowLogin(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 1 ? prev + 0.05 : 1));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    if (showLogin) {
        return <LoginScreen />;
    }

    return (
        <View style={styles.container}>
            {/* Logo animado */}
            <Animatable.Image
                animation="bounceIn"
                duration={2000}
                source={require("../assets/logo.png")}
                style={styles.image}
            />

            {/* Animación de texto Siccus letra por letra */}
            <View style={styles.titleContainer}>
                {["S", "I", "C", "C", "U", "S"].map((char, index) => (
                    <Animatable.Text
                        key={index}
                        animation="zoomIn"
                        iterationCount={1}
                        delay={index * 200}
                        style={styles.title}
                    >
                        {char}
                    </Animatable.Text>
                ))}
            </View>

            {/* Animated Progress Bar */}
            <View style={styles.progressContainer}>
                <Animatable.View
                    style={[
                        styles.progressBar,
                        { width: `${progress * 100}%` }
                    ]}
                    transition="width"
                    duration={150}
                    easing="linear"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fdfc",
    },
    image: {
        height: 120,
        width: 120,
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: "row",
        marginBottom: 40,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#52ab98",
        marginHorizontal: 4,
    },
    progressContainer: {
        width: "60%",
        height: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        backgroundColor: '#52ab98',
    },
});
