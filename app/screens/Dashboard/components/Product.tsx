import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import moment from 'moment'

export default function Product({ product }: any) {
    const currentProduct = product.item;
    const {city, updatedAt,description, image, localization, price, title} = JSON.parse(JSON.stringify(currentProduct))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          image?.base64
            ? { uri: `data:image/png;base64,${image.base64}` }
            : require("../../../assets/noPhoto.png")
        }
      />
      <Text>{title}</Text>
      <Text>{price}$</Text>
          <Text>{moment(updatedAt).format('MMMM Do YYYY')}</Text>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
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
  header: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonWrapper: {
    width: "100%",
  },
});
