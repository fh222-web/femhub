import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";

type GradientType = keyof typeof theme.background.gradients;

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  type?: GradientType;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
  type = "diagonal", // default
}) => {
  const gradient = theme.background.gradients[type];

  return (
    <LinearGradient
      colors={[gradient.colors[0], gradient.colors[1], gradient.colors[0]]}
      start={gradient.start}
      end={gradient.end}
      locations={[gradient.location[0], gradient.location[1], gradient.location[2]]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;