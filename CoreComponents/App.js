import {View, Text, Image, ImageBackground, ScrollView, Button} from "react-native"
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <Button title="Press" onPress={() => console.log("Pressed button")} color="midnightblue" disabled/>
  </View> 
  );
}