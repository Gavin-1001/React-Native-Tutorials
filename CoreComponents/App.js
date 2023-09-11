import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, ActivityIndicator} from "react-native"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"}/>
      <ActivityIndicator size={"large"} color={"midnightblue"}/>
      <ActivityIndicator size={"large"} color={"midnightblue"} animating={false}/>
  </View> 
  );
}