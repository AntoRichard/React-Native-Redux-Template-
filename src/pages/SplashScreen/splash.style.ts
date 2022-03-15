import { StyleSheet } from "react-native";
import { COLOR } from "../../shared/styles/theme.color";

export const SplashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: COLOR.textColor,
        fontSize: 24
    }
})