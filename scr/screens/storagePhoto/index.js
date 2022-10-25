import React, {useEffect} from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { PhotoContainer } from "../../components";
import { LoadPhoto } from "../../store/actions/photoAction";

const StoragePhoto = () =>{

    const dispatch = useDispatch();
    const photo = useSelector((state) => state.photoReducer.photos)

    useEffect(() => {
        dispatch(LoadPhoto());
      }, [dispatch]);

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