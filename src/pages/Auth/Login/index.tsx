import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { LoginStyles } from "./login.style";

interface LoginProps {

}

const Login: FC<LoginProps> = (props) => {
    const {  } = props;
    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.text}>Login Pages</Text>
        </View>
    )
}

export default Login;    