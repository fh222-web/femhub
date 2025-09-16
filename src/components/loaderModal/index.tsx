import React from "react";
import {
  Modal,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { theme } from "../../theme";

interface LoaderModalProps {
  visible: boolean;
  message?: string;
}

const LoaderModal: React.FC<LoaderModalProps> = ({
  visible,
  message = "Please wait...",
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width,
    height,
  },
  loaderContainer: {
    backgroundColor: theme.colors.dark,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    minWidth: width * 0.7,
    maxWidth: width * 0.8,
    ...theme.shadows.md,
  },
  message: {
    ...theme.typography.body,
    color: theme.colors.white,
    marginTop: theme.spacing.md,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default LoaderModal;
