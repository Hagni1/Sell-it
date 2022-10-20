import { onValue } from "firebase/database";
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
import { useDispatch, useSelector } from "react-redux";
import { getData, productRef } from "../../store/productReducer";
import store from "../../store/store";
import { ProductTypes } from "../../types";
import Product from "./components/Product";

export default function Dashboard() {
  const dispatch = useDispatch<any>();
  // const products: any = store.getState().products;
  useEffect(() => {

    onValue(productRef, (snapshot) => dispatch(getData(snapshot.val())));
  }, [])
  
  const products: any = useSelector<any>(storeState => storeState.products)
  const productsValues:any = Object.entries(products)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productsValues}
        renderItem={(item) => <Product product={item} />}
        keyExtractor={(product: any) => product[0]}
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
