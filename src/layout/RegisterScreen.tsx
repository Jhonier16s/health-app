import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
export default function RegisterScreen({ onClose }: any) {
    return (
        <View>
            <Text>
                Sign up
            </Text>
            <TouchableOpacity onPress={onClose}>
                <Text>Back to login</Text>
            </TouchableOpacity>
        </View>
    )
}