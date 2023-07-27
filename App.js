// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import LoginScreen from "./Screens/AuthPages/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/AuthPages/RegistrationScreen/RegistrationScreen";
// import PostsScreen from './Screens/PostsScreen/PostsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/img/Photo_BG.png")}
        resizeMode="cover"
        style={styles.image}
      ></Image>

      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <PostsScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
});
