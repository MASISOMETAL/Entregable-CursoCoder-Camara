import React from "react";
import { Text, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { init } from "./scr/db";
import AppNavigator from "./scr/navigation";
import store from "./scr/store";//es el index dentro de nuestro store

const App = () =>{
    init()
        .then(() =>{
            console.log("Initialized database");
        })
        .catch((err) => {
            console.log("Initializing db failed.");
            console.log(err);
        });
        
    return(
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppNavigator/>
            </SafeAreaView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})

export default App;