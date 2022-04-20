// import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Button,
  StatusBar,
  Alert,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log("App is up and running");
  console.log(Dimensions.get("screen"));
  // o/p -> object {
  //   "fontScale": 1,
  //   "height": 850.9090909090909,
  //   "scale": 2.75,
  //   "width": 392.72727272727275,
  // }

  console.log(useDimensions()); //useful for both portrait and landscape mode
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={() => console.log("Text Clicked")}>
        Hello Raj
      </Text>
      <View
        style={{
          backgroundColor: "green",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            width: "100%",
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="green"
        title="Click Alert"
        onPress={() =>
          Alert.alert("Learning React Native", "Button Tapped", [
            { text: "Yes", onPress: () => console.log("Yes pressed") },
            { text: "No", onPress: () => console.log("No pressed") },
          ])
        }
      />

      {/* Only for iOS */}
      {/* <Button
        color="orange"
        title="Click Prompt"
        onPress={() =>
          Alert.prompt("Learning React Native", "This is prompt", (text) =>
            console.log(text)
          )
        }
      /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
