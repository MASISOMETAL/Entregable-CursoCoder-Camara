import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/color";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerPhoto:{
        width: width * 0.9,
        height: height * 0.3,
        borderColor: Colors.primary,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01,
        marginBottom: height * 0.01,
    },
    title:{
        fontSize: 20,
        marginTop: height * 0.01,
    },
    image:{
        width: "100%",
        height: "100%",
    },
})