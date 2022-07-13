import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";
import { BREADS } from "../../data/breads";

const Breads = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={BREADS}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { bread: item })}
          >
            <View>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
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
});

export default Breads;
