import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "../pages/Camera";
import Film from "../pages/Film";
import Icon from 'react-native-vector-icons/Ionicons';
import Speecher from "../pages/Speecher";
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";
import { Linking } from "react-native";


const Inventor = createBottomTabNavigator();

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

accelerometer
  .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20))
  .subscribe(
    speed => { console.log(`You moved your phone with ${speed}`, Linking.openURL('https://portal.virtual.ufc.br/')) },
    error => {
      console.log(error, "The sensor is not available");
    }
  );



const customTabBarStyle = {
  activeTintColor: '#f10',
  inactiveTintColor: 'gray',
  style: { backgroundColor: '#16161B', height: 60 },
};


const InventorRoutes = () => {
  return (
    <Inventor.Navigator
      initialRouteName="home"
      tabBarOptions={customTabBarStyle}>
      <Inventor.Screen
        name="home"
        options={{
          tabBarLabel: 'Falar',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        component={Speecher}
      />
      <Inventor.Screen
        name="camera"
        options={{
          tabBarLabel: 'Tirar foto',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" color={color} size={26} />
          ),
        }}
        component={Camera}
      />
      <Inventor.Screen
        name="film"
        options={{
          tabBarLabel: 'Gravar vídeo',
          tabBarIcon: ({ color }) => (
            <Icon name="film" color={color} size={26} />
          ),
        }}
        component={Film}
      />

    </Inventor.Navigator>
  );
};

export default InventorRoutes;
