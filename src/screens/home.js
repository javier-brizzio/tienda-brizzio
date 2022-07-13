import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../../data/categories";
import GridItem from "../components/GridItem";

const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <GridItem navigation={navigation} item={item} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
