import {View, Text, Image, ImageBackground, ScrollView} from "react-native"
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
        <ScrollView>
        <Image source={logoImg} style={{width: 300, height: 300}} />
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius tellus sed lacinia mollis. Morbi pellentesque enim id nibh luctus ultricies. Quisque in placerat diam. Quisque tempus eleifend augue vitae vehicula. Nunc ut suscipit erat. Suspendisse fringilla vel neque eu porta. Aenean mattis fringilla massa, vel tincidunt diam mattis et. Praesent nunc tortor, scelerisque at diam ut, vulputate tincidunt ex. Nulla egestas sagittis diam. Nulla lacinia nibh nec felis lacinia ultrices. Curabitur pretium placerat purus, non accumsan leo condimentum quis. Sed consectetur ligula elit, at vehicula ipsum tincidunt et. Proin ut egestas libero.

            Pellentesque ac elit sit amet mauris aliquam eleifend. Suspendisse potenti. Nullam vel euismod tortor, eget facilisis elit. Aliquam cursus lacus vel scelerisque sodales. Morbi ac porta metus, a finibus nulla. Curabitur vitae euismod augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel neque sit amet justo fermentum hendrerit. Nulla facilisi. Vivamus semper risus nec nulla iaculis hendrerit. Praesent luctus fermentum lacus quis sodales. Nullam rhoncus pellentesque odio, mollis dignissim augue. Integer a placerat odio. Maecenas sit amet bibendum mauris. Ut iaculis mollis massa vel finibus.

            Nulla id purus venenatis, sagittis turpis quis, bibendum orci. Nulla sem nisl, bibendum sed magna quis, sagittis mollis diam. Nam iaculis vestibulum felis. Morbi sit amet elit ultrices, lobortis nulla at, pretium est. Nullam ultrices leo ac ex vehicula, nec mattis purus molestie. Integer efficitur interdum mattis. Morbi metus sapien, ullamcorper ut odio sed, egestas mollis orci.

        </Text>
        <Image source={logoImg} style={{width: 300, height: 300}} />
        </ScrollView>
  </View> 
  );
}