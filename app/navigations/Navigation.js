import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

const tab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => ScreenOptions(route, color),
        })}
      >
        <tab.Screen 
          name="Restaurants" 
          component={RestaurantsStack}
          options={{ title: "restaurantes" }} 
        />
        <tab.Screen 
          name= "Favorites" 
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <tab.Screen
          name="Account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <tab.Screen
          name="Search"
          component={SearchStack}
          options={{title: "Buscar" }}
        />
        <tab.Screen
          name="TopRestaurants"
          component={TopRestaurantsStack}
          options={{title: "top 5" }}
        />
      </tab.Navigator>
    </NavigationContainer>
  )
}

function screenOptions(route, color){
  let iconName;

  switch (route.name) {
    case "Restaurants":
      iconName = "compass-outline"
      break;
    case "Favorites":
      iconName = "heart-outline"
      break;
    case "TopRestaurant":
      iconName = "stack-outline"
      break;
    case "Search":
      iconName = "magnify"
      break;
    case "Account":
      iconName = "home-outline"
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  )
}