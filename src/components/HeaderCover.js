import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
export default function HeaderCover() {
  return (
    <View style={styles.headerView}>
      <Image
        style={{
          height: 200,
          width: "60%",
          marginTop: 60,
          marginBottom: 20,
        }}
        source={{
          uri: "https://cdni.iconscout.com/illustration/free/thumb/about-us-2061897-1740019.png",
        }}
      />

      <Text style={styles.headerText}>Welcom back, Dear Customer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    marginTop: -100,
    height: 490,
    width: "100%",
    backgroundColor: "#2FBAE3",
    marginVertical: "-20%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
  },
});
