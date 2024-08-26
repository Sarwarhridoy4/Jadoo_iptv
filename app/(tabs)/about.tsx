import { StyleSheet, Text, View } from "react-native";

function AboutScreen() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutTitle}>About This App</Text>
      <Text style={styles.aboutText}>
        This is a simple Expo app featuring a WebView that loads an IPTV channel
        list. The app is designed to run on Android TV, providing users with
        easy access to streaming content.
      </Text>
    </View>
  );
}
export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 16,
    textAlign: "center",
  },
});
