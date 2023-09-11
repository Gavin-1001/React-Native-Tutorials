import {View} from "react-native"
import Greet from "./Components/Greet"

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){


  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <Greet username="Myname"/>
      <Greet username="yourName"/>
  </View> 
  );
}