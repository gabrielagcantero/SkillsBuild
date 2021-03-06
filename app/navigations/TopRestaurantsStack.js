import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="TopRestaurants"
        component={TopRestaurants}
        options={{ title: "Top 5" }}
      />
    </Stack.Navigator>
  )
}