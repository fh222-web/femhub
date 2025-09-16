import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import styles from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default HomeScreen;
