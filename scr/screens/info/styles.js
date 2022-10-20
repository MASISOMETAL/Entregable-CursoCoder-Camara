import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/color";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: "#555500",
        //justifyContent: "center",
        alignItems: "center",
    },
    containerImage:{
        width: width * 0.9,
        height: height * 0.3,
        borderColor: Colors.primary,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
    },
    containerButton:{

    },
    button:{
        width: width * 0.5,
        height: height * 0.06,
        borderRadius: 15,
        borderColor: Colors.primary,
        borderWidth: 2,
        backgroundColor: Colors.secondary,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: "100%",
        height: "100%",
    },
})

