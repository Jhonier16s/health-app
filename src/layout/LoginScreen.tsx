import { useNavigation } from "expo-router";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import { useEffect, useState } from "react";
import RegisterScreen from "./RegisterScreen";
import MainScreen from "./MainScreen";
import { supabase } from "../supabaseClient";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [showRegister, setShowRegister] = useState(false);
    const [showMain, setShowMain] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const handleLogin = async () => {
        setShowMain(true);
        setErrorMessage("");

        if (!email || !password) {
            setErrorMessage("Por favor, introduce tu email y contraseña.");
            return;
        }

        setLoading(true);

        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .eq("password", password)
            .single();

        setLoading(false);

        if (error || !data) {
            setErrorMessage("Email o contraseña incorrectos.");
        } else {
            // setShowMain(true);
        }
    };

    if (showRegister) {    
        return <RegisterScreen onClose={() => setShowRegister(false)} />;
    }

    if (showMain) {        
        return <MainScreen onLogout={() => setShowMain(false)} />;
    }

   /*  useEffect(()=>{
        if (showRegister || showMain ) {
            setEmail("")
            setPassword("")
        }
    },[showRegister, showMain]) */

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

                <TouchableOpacity
                    style={[styles.button, loading && { opacity: 0.6 }]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowRegister(true)}>
                    <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#f7fdfc",
        justifyContent: "center",
    },
    container: {
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 40,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: -30,
        marginTop: -150,
        borderRadius: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#2b6777",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        marginBottom: 30,
    },
    input: {
        width: "100%",
        padding: 12,
        marginBottom: 15,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#cbd5e0",
    },
    button: {
        backgroundColor: "#52ab98", // Verde consistente con Register
        paddingVertical: 14,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    link: {
        marginTop: 20,
        color: "#2b6777",
        textDecorationLine: "underline",
        fontSize: 14,
    },
    error: {
        color: "red",
        marginBottom: 10,
        textAlign: "center",
    },
});
