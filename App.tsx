import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { theme } from "./src/theme";
import MainNavigation from "./src/navigation";
import { GlobalLoader } from "./src/components";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading femhub...</Text>
          </View>
        }
        persistor={persistor}
      >
        <MainNavigation />
        <StatusBar style="auto" />
        <GlobalLoader />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    ...theme.typography.body,
  },
});
