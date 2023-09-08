import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable} from "react-native"
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){

  return( 
  <View style={{backgroundColor:"plum", flex: 1, padding: 60}}>
      <Button title="Press" onPress={() => console.log("Pressed button")} color="midnightblue" />
      <Pressable onPress={() => console.log("IMage Pressed")}>
        <Image source={logoImg} style={{width: 300, height:300}} />
          </Pressable>
          <Pressable onPress={()=>console.log("TEXT PRESSED")}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius tellus sed lacinia mollis. Morbi pellentesque enim id nibh luctus ultricies. Quisque in placerat diam. Quisque tempus eleifend augue vitae vehicula. Nunc ut suscipit erat. Suspendisse fringilla vel neque eu porta. Aenean mattis fringilla massa, vel tincidunt diam mattis et. Praesent nunc tortor, scelerisque at diam ut, vulputate tincidunt ex. Nulla egestas sagittis diam. Nulla lacinia nibh nec felis lacinia ultrices. Curabitur pretium placerat purus, non accumsan leo condimentum quis. Sed consectetur ligula elit, at vehicula ipsum tincidunt et. Proin ut egestas libero.

                Pellentesque ac elit sit amet mauris aliquam eleifend. Suspendisse potenti. Nullam vel euismod tortor, eget facilisis elit. Aliquam cursus lacus vel scelerisque sodales. Morbi ac porta metus, a finibus nulla. Curabitur vitae euismod augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel neque sit amet justo fermentum hendrerit. Nulla facilisi. Vivamus semper risus nec nulla iaculis hendrerit. Praesent luctus fermentum lacus quis sodales. Nullam rhoncus pellentesque odio, mollis dignissim augue. Integer a placerat odio. Maecenas sit amet bibendum mauris. Ut iaculis mollis massa vel finibus.

                Nulla id purus venenatis, sagittis turpis quis, bibendum orci. Nulla sem nisl, bibendum sed magna quis, sagittis mollis diam. Nam iaculis vestibulum felis. Morbi sit amet elit ultrices, lobortis nulla at, pretium est. Nullam ultrices leo ac ex vehicula, nec mattis purus molestie. Integer efficitur interdum mattis. Morbi metus sapien, ullamcorper ut odio sed, egestas mollis orci.

                Sed ut sapien nec mauris finibus scelerisque at ut orci. Sed erat ante, fringilla in viverra id, congue non leo. Mauris scelerisque, tortor vel luctus varius, magna felis tristique ex, eu venenatis velit odio vel urna. Ut elementum sapien vitae diam pharetra gravida. Nunc fermentum consequat nisi. Vestibulum gravida aliquam ligula ut semper. Quisque sed est lacus. In dolor est, luctus vel risus finibus, congue semper massa. Ut sagittis eu ipsum nec sollicitudin. Duis sit amet molestie sem, at pulvinar tortor. Nullam finibus purus in arcu pellentesque, quis aliquet lacus sollicitudin.

                Cras eget nunc ut erat interdum ullamcorper quis eget velit. Morbi magna diam, aliquet vel nulla non, suscipit malesuada ligula. Fusce lobortis nisl non ornare tincidunt. Maecenas vel blandit erat, ut mattis elit. Cras at mi sed sapien egestas molestie eget et nisi. Vivamus vulputate lectus non risus lobortis, nec semper erat tempor. Ut et ligula ac metus placerat congue. Phasellus eu placerat eros. Integer scelerisque non nisl vitae ultricies. Phasellus sed nibh quis ligula mattis varius. Duis sollicitudin tempus nulla, vitae eleifend magna pretium at. Sed at libero egestas ex euismod faucibus. Donec in metus vitae elit mollis laoreet non id ex. Integer felis eros, efficitur at ligula sed, sodales bibendum orci. Aliquam sed efficitur nisl. 
            </Text>
          </Pressable>
  </View> 
  );
}