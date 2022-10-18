import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/productReducer";
import store from "../../store/store";
import { ProductTypes } from "../../types";
import Product from "./components/Product";

export default function Dashboard() {
  const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch<any>();
  store.subscribe(() => setProducts(store.getState().products.value));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <SafeAreaView  style={styles.container}>
       <FlatList
          data={products}
          renderItem={(item) => <Product product={item} />}
          keyExtractor={(product: any) => product.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  slogan: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  addNewProduct: {
    width: 80,
    height: 80,
  },
  buttonWrapper: {
    width: "100%",
  },
});
