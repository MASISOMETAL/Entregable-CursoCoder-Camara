import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InfoApp, StoragePhoto } from "../screens";
import { Colors } from "../constants/color";


const Stack = createNativeStackNavigator();

const InfoNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Info"
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        >
            <Stack.Screen 
                name="Info" 
                component={InfoApp}
                options={{
                    title: "Uso de Image Picker"
                }}
            />
            <Stack.Screen
                name="StoragePhoto"
                component={StoragePhoto}
                options={{
                    title: "Fotos Guardadas"
                }}
            />
        </Stack.Navigator>
    )
}

export default InfoNavigation;