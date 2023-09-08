import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal} from "react-native"
import { useState } from "react";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <Button title="Press" onPress={() => setIsModalVisible(true)} color="midnightblue" />
     <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="slide" presentationStyle="pageSheet">  
        <View style={{backgroundColor:"lightblue", flex: 1, padding: 60}}>
          <Text>Modal Content</Text>
          <Button title="close" color={"midnightblue"} onPress={() => setIsModalVisible(false)}/>
        </View>
     </Modal>
  </View> 
  );
}