import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, ActivityIndicator, Alert} from "react-native"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
    <Button title={"Alert"} onPress={()=> Alert.alert("Invalid data...")}/>
    <Button title={"Alert 2"} onPress={()=> Alert.alert("Invalid data...", "Data of birth incorrect")}/>
    <Button title={"Alert 3"} onPress={()=> Alert.alert("Invalid data...", "Data of birth incorrect", [
      {
        text: "Cancel",
        onPress:() => console.log("CANCEL PRESSED")
      },
      {
        text: "OK",
        onPress:() => console.log("OK PRESSED")
      },
    ])}/>
  </View> 
  );
}