import * as ImagePicker from "expo-image-picker";
import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Colors } from "../../constants/color";
import { styles } from "./styles";
import { Dispatch } from "redux";
import { SavePhoto } from "../../store/actions/photoAction";
import { useDispatch } from "react-redux";

const InfoApp = ({navigation}) =>{

    const [pickUrl, setPickUrl] = useState();
    const [imagePatch, setImage] = useState("");
    const dispatch = useDispatch();

    const verifyPermissions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("you need to grant camera permissions to use this app", [{ text: "Okay" }]);
            return false;
        }
        return true;
    };

    const onHandleTakePhoto = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) return;
    
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5,
        });

        setPickUrl(image.uri);
        setImage(image.uri);
    };

    const savePhoto = () =>{
        dispatch(SavePhoto(imagePatch));
        navigation.navigate("StoragePhoto");
        setPickUrl();
    }

    const galeryPhotos = () =>{
        navigation.navigate("StoragePhoto")
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                {!pickUrl ? (
                    <Text>there is no photo</Text>
                ) : (
                    <Image style={styles.image} source={{uri: pickUrl}} />
                )}
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onHandleTakePhoto}
                >
                    <Text>Tomar foto</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={!pickUrl ? {...styles.button,backgroundColor: Colors.grey } : {...styles.button}}
                    onPress={savePhoto}
                    disabled={!pickUrl}
                >
                    <Text>Guardar foto</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={galeryPhotos}
                >
                    <Text>Ir a galeria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoApp;

