import React from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { PhotoContainer } from "../../components";

const StoragePhoto = () =>{

    const photo = useSelector((state) => state.photoReducer.photos)

    const renderItem = ({item}) => (<PhotoContainer item={item} image={item.image} />)

    return(
            <FlatList
            style={styles.container}
            data={photo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            />
    )
}

export default StoragePhoto;