import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ onClose }: any) {

    const [showCompleteProfile, setShowCompleteProfile] = useState(false);
    

    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/hombre.png")} style={styles.avatar} />
            <Text style={styles.name}>Jhonier</Text>
            <Text style={styles.role}>Usuario de Siccus</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>📧 Correo:</Text>
                <Text style={styles.sectionText}>userjs@gmail.com</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>📏 Altura:</Text>
                <Text style={styles.sectionText}>1.72 m</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>⚖️ Peso:</Text>
                <Text style={styles.sectionText}>70 kg</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🏃‍♂️ ¿Hace deporte?</Text>
                <Text style={styles.sectionText}>✅ Sí</Text>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
               <TouchableOpacity style={styles.closeButton} onPress={() => alert("Completar perfil")}>
                <Text style={styles.closeText}>Completar perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7fdfc",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#2b6777",
    },
    role: {
        fontSize: 16,
        color: "#4f9a94",
        marginBottom: 30,
    },
    section: {
        backgroundColor: "#e0f7f1",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#52ab98",
    },
    sectionText: {
        fontSize: 15,
        color: "#333",
        marginTop: 5,
    },
    closeButton: {
        marginTop: 30,
        backgroundColor: "#52ab98",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    closeText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
