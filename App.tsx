import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Routing } from "./app/screens";
import {Provider} from "react-redux"
import store from "./app/store/store";
import {app} from './app/firebase/init'
export default function App() {

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
