import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const services = [
  {
    id: "1",
    title: "Consulta General",
    description: "Atención médica personalizada y diagnóstico clínico.",
    image: require("../assets/consulta.png"),
    icon: "stethoscope",
  },
  {
    id: "2",
    title: "Laboratorio Clínico",
    description: "Exámenes de sangre, orina y diagnósticos de rutina.",
    image: require("../assets/laboratorio.png"),
    icon: "microscope",
  },
  {
    id: "3",
    title: "Fisioterapia",
    description: "Rehabilitación física y terapias personalizadas.",
    image: require("../assets/fisioterapia.png"),
    icon: "arm-flex",
  },
  {
    id: "4",
    title: "Salud Mental",
    description: "Psicoterapia y acompañamiento emocional.",
    image: require("../assets/mental.png"),
    icon: "head-cog-outline",
  },
];

export default function PortfolioScreen({ onClose }: any)  {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Portafolio de Servicios</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>              
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    display: "flex",
    alignSelf: "center",
    
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
});
