import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { GradientBackground, SegmentedControl } from "../../components";
import imagePath from '../../../assets/constants/imagePath';
import styles from "./styles";

const SettingsScreen: React.FC = () => {
    return(
        <Text style={styles.title}>Settings</Text>
    );
}

export default SettingsScreen;