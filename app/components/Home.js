import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>RenIOT</Text>
      <Text>Temperature is : 30</Text>
      <Text>Battery is : 80%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
