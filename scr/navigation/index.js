import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import InfoNavigation from "./info";


const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <InfoNavigation />
        </NavigationContainer>
    )
}

export default AppNavigator;