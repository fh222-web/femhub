import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GradientBackground } from "../../components";
import { theme } from "../../theme";
import styles from "./styles";

const NotificationScreen: React.FC = () => {
  return (
      <GradientBackground style = {styles.container}>
        <Text style={styles.title}>Notifications</Text>
      </GradientBackground>
  );
};

export default NotificationScreen;
