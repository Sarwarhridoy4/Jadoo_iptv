import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://iptv.jadoodigital.com/channel-list" }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
