import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet, Text } from "react-native-web";
import { AppContext } from "../../app/Provider";

const Details = ({ navigation, route }) => {
  const { addToCart } = useContext(AppContext);
  const bread = route.params.bread;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
      <TouchableOpacity
        onPress={() =>
          addToCart({
            id: bread.id,
            name: bread.name,
            price: bread.price,
            weight: bread.weight,
          })
        }
      >
        <Text>Agregar al Carrito</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: "OpenSansBold",
    marginBottom: 10,
  },
});

export default Details;
