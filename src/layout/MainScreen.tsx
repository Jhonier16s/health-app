import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "expo-router";
import ProfileScreen from "./ProfileScreen";
import ProgressScreen from "./ProgressScreen";
import PortfolioScreen from "./PortfolioScreen";

export default function MainScreen({ onLogout }: any) {
  const navigation = useNavigation();
  const [showProfile, setShowProfile] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showPorfolio, setShowPorfolio] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  if (showProfile) {
    return <ProfileScreen onClose={() => setShowProfile(false)} />;
  }

  if (showPorfolio){
    return <PortfolioScreen onClose={() => setShowPorfolio(false)} />;
  }

  if (showProgress) {
    return <ProgressScreen onClose={() => setShowProgress(false)} />;
  }

  const menuOptions = [
    { label: "Perfil", icon: "👤", onAction: () => setShowProfile(true) },
    { label: "Mi progreso", icon: "📈", onAction: () => setShowProgress(true)},
    { label: 'Porfolio', icon: '📂', onAction: () => setShowPorfolio(true)},
    { label: "Configuración", icon: "⚙️" },
    { label: "Soporte", icon: "🛟" },
  ];

  const recommendations = [
    {
      title: "🚶‍♂️ Camina 20 minutos",
      description:
        "La IA recomienda una caminata ligera para mejorar tu estado de ánimo y reducir el estrés.",
    },
    {
      title: "🥤 Hidrátate",
      description:
        "Recuerda tomar al menos 8 vasos de agua al día para mantenerte activo y concentrado.",
    },
    {
      title: "🧘‍♀️ Medita 5 minutos",
      description:
        "Tómate un tiempo para desconectar y centrarte en tu respiración.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>Bienvenido a Siccus</Text>
        <Text style={styles.subtitle}>Tu IA de bienestar personal</Text>

        {/* 📋 Recomendaciones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✨ Recomendaciones de hoy</Text>
          {recommendations.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
            </View>
          ))}
        </View>

        {/* 📑 Menú */}
        <Text style={styles.menuTitle}>Menú</Text>
        <View style={styles.menu}>
          {menuOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item?.onAction && item.onAction}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 🚪 Logout */}
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
    fontSize: 28,
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
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#52ab98",
  },
  card: {
    backgroundColor: "#52ab98",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "white",
    lineHeight: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "700",
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
    backgroundColor: "#2b6777",
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
