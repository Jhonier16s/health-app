import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "expo-router";

export default function MainScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.title}>Bienvenido a HealthApp</Text>
            <Text style={styles.subtitle}>Tu bienestar, nuestra prioridad</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3F2FD",
        padding: 20
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1565C0",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        color: "#1976D2",
        textAlign: "center"
    }
});