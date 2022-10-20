import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { colors } from "../styles/colors";
import { Formik } from "formik";
import { TextInput, Button } from "react-native-paper";

interface LoginTypes{
  email: 'string',
  password:'string',
}

export default function LoginScreen({ navigation }: any) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSubmit = (values:any) => {
    console.log('submit')
    signInWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }
  const initialValues = {
    email: '',
    password:''
  }
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          isValid,
        }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              maxLength={64}
            />
            <TextInput
              label="Password"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              onBlur={handleBlur("password")}
              value={values.password}
              autoCorrect={false}
              maxLength={64}
            />

            <Pressable>
              <Button
                onPress={handleSubmit}
                mode="contained"
                disabled={!isValid}
                style={styles.addButton}
              >
                Login
              </Button>
            </Pressable>
          </View>
        )}
      </Formik>
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
  inputContainer: {
    width: "100%",
    padding: 10,
  },
  addButton: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    marginBottom: 10,
  },
});
