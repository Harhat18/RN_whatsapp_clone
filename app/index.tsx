import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/welcome.png")}
        style={styles.welcome}
      />
      <Text>First Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
});

export default Page;
