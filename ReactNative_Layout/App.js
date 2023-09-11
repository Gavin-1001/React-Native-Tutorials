import Box from "./Components/Box"
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 1</Box>
      <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
      <Box style={{backgroundColor: "#1c4c56"}}>Box 3</Box>
      {/* <Box style={{backgroundColor: "#ab9156"}}>Box 4</Box>
      <Box style={{backgroundColor: "#6b0803"}}>Box 5</Box>
      <Box style={{backgroundColor: "#1c4c56"}}>Box 6</Box>
      <Box style={{backgroundColor: "#b95f21"}}>Box 7</Box> */}
    </View>

    // <View style={{backgroundColor: "plum", flex :1}}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 64,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: "red"
    
  }, 

});
