import { Formik } from "formik";
import { FormikValues, FormikHelpers, FormikProps } from "formik/dist/types";
import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // not react-image-picker
import { TextInput, Button } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { addProduct, AppDispatch } from "../store/productReducer";
import { useDispatch } from "react-redux";
import { ProductTypes } from "../types";

interface pickImageTypes {
  setFieldValue: any;
  values: object;
}
export default function AddNewProduct() {
  const [pickerResponse, setPickerResponse] = useState(null);
  const formRef = useRef<FormikProps<any>>() as any;
  const dispatch = useDispatch<AppDispatch>();
  const initialValues = {
    title: "",
    price: "",
    image: { uri: "", cancelled: true },
    description: "",
    localization: { latitude: 0, longitude: 0 },
    city: "",
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      formRef.current.setFieldValue("localization", location.coords);
    })();
  }, []);
  
  const pickImage = async ({ setFieldValue, values }: pickImageTypes) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64:true,
    });
    const { cancelled }: any = result;
    if (!cancelled) {
      setFieldValue("image", result);
    }
  };

  const handleSubmit = async(values:ProductTypes) => {
    dispatch(addProduct(values))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          isValid,
        }) => (
          <ScrollView style={styles.inputContainer}>
            <TouchableHighlight
              onPress={() => pickImage({ setFieldValue, values })}
              style={styles.imageContainer}
            >
              <Image
                style={styles.image}
                source={
                  values.image.cancelled
                    ? require("../assets/noPhoto.png")
                    : { uri: values.image.uri }
                }
              />
            </TouchableHighlight>
            <TextInput
              label="Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              maxLength={64}
            />
            <TextInput
              label="Price (in $)"
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              value={values.price}
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              label="Description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              maxLength={600}
              multiline
            />
            <TextInput
              label="City"
              onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}
              value={values.city}
              maxLength={32}
            />
            <MapView
              style={styles.map}
              region={{
                latitude: values.localization.latitude,
                longitude: values.localization.longitude,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
              }}
              onPress={(e) =>
                setFieldValue("localization", e.nativeEvent.coordinate)
              }
            >
              <Marker
                coordinate={{
                  latitude: values.localization.latitude,
                  longitude: values.localization.longitude,
                }}
              />
            </MapView>
            <Pressable>
              <Button
                onPress={handleSubmit}
                mode="contained"
                disabled={!isValid}
                style={styles.addButton}
              >
                Add
              </Button>
            </Pressable>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "200%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    width: "100%",
    padding: 10,
  },
  imageContainer: {
    width: "100%",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 400,
  },
  map: {
    width: "100%",
    height: 400,
  },
  addButton: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    marginBottom: 10,
  },
});
