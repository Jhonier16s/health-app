import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressScreen({ onClose }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📊 Mi Progreso</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Tareas Completadas</Text>
                <AnimatedCircularProgress
                    size={140}
                    width={15}
                    fill={75}
                    tintColor="#52ab98"
                    backgroundColor="#e0f7f1"
                    rotation={0}
                >
                    {(fill) => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
                </AnimatedCircularProgress>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Horas de sueño (promedio semanal)</Text>
                <View style={styles.barContainer}>
                    <View style={[styles.bar, { width: "70%" }]} />
                </View>
                <Text style={styles.barText}>7 h</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Ejercicio esta semana</Text>
                <View style={styles.barContainer}>
                    <View style={[styles.bar, { width: "50%", backgroundColor: "#f4a261" }]} />
                </View>
                <Text style={styles.barText}>3.5 h</Text>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7fdfc",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2b6777",
        textAlign: "center",
        marginBottom: 30,
    },
    card: {
        backgroundColor: "#e0f7f1",
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#52ab98",
        marginBottom: 15,
    },
    barContainer: {
        height: 20,
        width: "100%",
        backgroundColor: "#d0e6e0",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
    },
    bar: {
        height: "100%",
        backgroundColor: "#52ab98",
    },
    barText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    progressText: {
        fontSize: 22,
        color: "#2b6777",
        fontWeight: "bold",
    },
    closeButton: {
        marginTop: 30,
        backgroundColor: "#52ab98",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    closeText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
