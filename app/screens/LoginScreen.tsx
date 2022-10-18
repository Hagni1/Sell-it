import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "../styles/colors";

export default function LoginScreen({ navigation }: any) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/loginPage.jpg")}
    >
      <View style={styles.header}>
        <Image style={styles.icon} source={require("../assets/logo.png")} />
        <Text style={styles.slogan}>
          Get Rid of Stuff You Don't Need Any More
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button color="tomato" title="Login with Apple" />
        <Button
          title="Login with Google"
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  slogan: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  header: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
  },
});
