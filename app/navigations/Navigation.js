import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen 
          name="Restaurants" 
          component={RestaurantsStack}
          options={{ title: "restaurantes" }} 
        />
        <Tab.Screen 
          name= "Favorites" 
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{title: "Buscar" }}
        />
        <Tab.Screen
          name="TopRestaurants"
          component={TopRestaurantsStack}
          options={{title: "top 5" }}
        />
      </Tab.Navigator>
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
    case "TopRestaurants":
      iconName = "star-outline"
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