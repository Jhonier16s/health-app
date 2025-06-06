import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    ScrollView
} from "react-native";
import { supabase } from "../supabaseClient";

export default function RegisterScreen({ onClose }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [mobilephone, setMobilePhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
    setErrorMessage("");

    if (!email || !password || !fullname || !mobilephone) {
        setErrorMessage("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
    }

    setLoading(true);
    const { error: insertError } = await supabase.from("users").insert([
        {
            email: email,
            fullname: fullname,
            mobile_phone: mobilephone,
            password: password,
        },
    ]);
    setLoading(false);

    if (insertError) {
        // Verifica si el mensaje de error incluye información de clave duplicada
        if (
            insertError.message.includes("duplicate key") ||
            insertError.message.toLowerCase().includes("email") ||
            insertError.message.toLowerCase().includes("unique constraint")
        ) {
            setErrorMessage("El correo electrónico ya está registrado.");
        } else {
            setErrorMessage(insertError.message);
        }
    } else {
        alert("Usuario registrado exitosamente");
        onClose();
    }
};


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={require("../assets/images/mental-health.png")} 
                    style={styles.headerImage}
                />

                <Text style={styles.title}>Crea tu cuenta</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={fullname}
                    onChangeText={setFullName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email "
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Celular"
                    keyboardType="phone-pad"
                    value={mobilephone}
                    onChangeText={setMobilePhone}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Contraseña"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

                <TouchableOpacity
                    style={[styles.button, loading && { opacity: 0.6 }]}
                    onPress={handleRegister}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Registrarse</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.link}>Ya tengo cuenta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "#f7fdfc",
        padding: 20,
    },
    container: {
        alignItems: "center",
    },
    headerImage: {
        width: 200,
        height: 100,
        marginBottom: 20,
        resizeMode: "contain",
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#2b6777",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 12,
        marginVertical: 8,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#cbd5e0",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#52ab98",
        padding: 14,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    link: {
        marginTop: 20,
        color: "#2b6777",
        textDecorationLine: "underline",
    },
    error: {
        color: "red",
        marginTop: 10,
        textAlign: "center",
    },
});
