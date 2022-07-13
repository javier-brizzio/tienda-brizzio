import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const GridItem = ({ item, navigation }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Breads")}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#aac0af",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
export default GridItem;
