import { useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "expo-router";

export default function MainScreen({ onLogout }: any) {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const menuOptions = [
        { label: "Perfil", icon: "👤" },
        { label: "Portafolio", icon: "🗂️" },
        { label: "Acerca de", icon: "ℹ️" },
        { label: "Ayuda", icon: "❓" },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.title}>Bienvenido a HealthApp</Text>
                <Text style={styles.subtitle}>Tu bienestar, nuestra prioridad</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🩺 Servicios Médicos</Text>
                    <Text style={styles.sectionText}>
                        Ofrecemos consultas generales, pediatría, salud mental, exámenes de laboratorio,
                        nutrición, y seguimiento de tratamientos crónicos. Nos dedicamos a brindarte
                        atención médica de calidad, con un equipo comprometido y tecnología moderna.
                    </Text>
                </View>

                <Text style={styles.menuTitle}>Menú</Text>
                <View style={styles.menu}>
                    {menuOptions.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.menuItem}>
                            <Text style={styles.menuIcon}>{item.icon}</Text>
                            <Text style={styles.menuText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                    <Text style={styles.logoutText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#f7fdfc",
        padding: 20,
    },
    container: {
        alignItems: "center",
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 20,        
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#2b6777",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: "#4f9a94",
        marginBottom: 20,
        textAlign: "center",
    },
    section: {
        backgroundColor: "#e0f7f1",
        borderRadius: 12,
        padding: 15,
        width: "100%",
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: "#52ab98",
    },
    sectionText: {
        fontSize: 15,
        color: "#333",
        lineHeight: 22,
    },
    menuTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#2b6777",
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    menu: {
        width: "100%",
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#52ab98",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
    },
    menuIcon: {
        fontSize: 22,
        marginRight: 10,
        color: "white",
    },
    menuText: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: "#2b6777",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
