import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AppContext } from "../../app/Provider";
import { createOrder, getCurrentUser } from "../../app/api";

const Cart = () => {
  const { state, clearProduct } = useContext(AppContext);

  const generateOrder = async () => {
    const user = await getCurrentUser();
    const order = {
      buyer: user.email,
      items: state,
      total: getTotal(),
    };
    createOrder(order);
  };
  const getTotal = () => state.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <View>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity onPress={() => clearProduct(item)}>
              <Text>Borrar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text>{getTotal()}</Text>
      <TouchableOpacity onPress={() => generateOrder()}>
        <Text>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
