import {View, Text, Image, ImageBackground} from "react-native"
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <Text><Text style={{color: 'white'}}>Hello </Text>World</Text>
      {/* <Image source ={logoImg} style={{width: 300, height: 300}}/>
      //url needed as a key for remote images
      <Image source={{uri:'https://picsum.photos/300'}} style={{height: 300, width:300}} /> */}
      <ImageBackground source={logoImg} style={{flex: 1}}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
  </View> 
  );
}