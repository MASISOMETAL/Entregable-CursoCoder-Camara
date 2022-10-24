import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const PhotoContainer = ({item, image}) =>{
    return(
    <View style={styles.container}>
        <View style={styles.containerPhoto}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
    </View>
    )
}

export default PhotoContainer;

//            <Image style={styles.image} source={{uri: image}}/>