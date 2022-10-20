import React, {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const InfoApp = () =>{

    const [pickUrl, setPickUrl] = useState();

    const verifyPermisions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("you need grant camera permissions to use this app", [{text: "okay"}]);
            return false;
        }
        return true;
    };

    const onHandleTakeImage = async () =>{
        const hasPermission = await verifyPermisions();
        if (!hasPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        setPickUrl(image.uri);
    };

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
                    onPress={onHandleTakeImage}
                >
                    <Text>Take Photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoApp;

