import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import React from "react";
import { Routing } from "./app/screens";
import {Provider} from "react-redux"
import store from "./app/store/store";

export default function App() {
  //Initializing the SDK.
  Parse.setAsyncStorage(AsyncStorage);
  //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
  Parse.initialize(
    "OZzszjQm8EmArL6QVitv11WZ3cxXYxCyQV32egZf",
    "NIGHqp4sCmDQrlpkp3wuhydYE1Zmjh781ud7m9ys"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";

  //This funciton will save a simple Person object

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
