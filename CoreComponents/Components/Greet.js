import { Component } from "react";
import {View, Text} from "react-native"

export default function Greet({username}) {
    return (
        <View>
        
            <Text>Hello, {username}</Text>
        </View>
    );
}