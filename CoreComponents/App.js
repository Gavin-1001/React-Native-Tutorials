import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal} from "react-native"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
       <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={isStatusBarVisible}
      />
      <Button
        title="Hide / Show StatusBar"
        onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
      />
      {/* only works on android */}
        </View> 
  );
}