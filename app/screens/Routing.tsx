import { Routes } from "react-router-dom";

import AddNewProduct from "./AddNewProduct";
import Dashboard from "./Dashboard/Dashboard";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tabOptions = {
  scrollEnabled: true,
  activeTintColor: "#e91e63",
};

export default function Routing() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="LoginScreen"
      >
        <Tab.Screen name="Login Screen" component={LoginScreen} />
        <Tab.Screen name="Add New Product" component={AddNewProduct} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
