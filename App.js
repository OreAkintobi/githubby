import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import api from "./src/api/data";

export default function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await api.get("/repos/rails/rails/commits");
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
