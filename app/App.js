// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  ImageBackground,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";

export default function App() {
  const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);
  const [modalVisibleSignIn, setModalVisibleSignIn] = useState(false);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("./img/Photo_BG.png")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <Pressable
        style={styles.signUp}
        onPress={() => setModalVisibleSignUp(true)}
      >
        <Text style={styles.signUpText}>Зареєстуватися</Text>
      </Pressable>
      <Pressable
        style={styles.logIn}
        onPress={() => setModalVisibleSignIn(true)}
      >
        <Text style={styles.logInText}>Вже є акаунт? Увійти</Text>
      </Pressable>

      <Modal
        // style={styles.openRegister}
        animationType="slide"
        transparent={true}
        visible={modalVisibleSignUp}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleSignUp(!modalVisibleSignUp);
        }}
      >
        <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.openRegister}>
            <View style={styles.openRegister}>
              <View style={styles.openRegisterAddPhoto}>
                <View style={styles.addPhoto}>
                  <Text style={styles.addIcon}>+</Text>
                </View>
              </View>
              <Text style={styles.signUpTextTitle}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                value={text}
                placeholder="Логін"
                onChangeText={setText}
                // keyboardType="text"
              />

              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                // keyboardType="email"
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                // keyboardType="numeric"
              />
              <Pressable
                style={styles.signUpOpenModal}
                onPress={() => setModalVisibleSignUp(!modalVisibleSignUp)}
              >
                <Text style={styles.signUpText}>Зареєстуватися</Text>
              </Pressable>
              <Pressable style={styles.logInOpenModal}>
                <Text
                  style={styles.logInTextOpenModal}
                  onPress={
                    (() => setModalVisibleSignUp(!modalVisibleSignUp),
                    () => setModalVisibleSignIn(!modalVisibleSignIn))
                  }
                >
                  Вже є акаунт?
                  <Text style={styles.logInTextOpenModalsignUpLink}>
                    Увійти
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSignIn}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleSignIn(!modalVisibleSignIn);
        }}
      >
        <View style={styles.openRegister}>
          <View style={styles.openRegister}>
            <Text style={styles.modalText}></Text>
            <Pressable
              style={styles.signUpOpenModal}
              onPress={() => setModalVisibleSignIn(!modalVisibleSignIn)}
            >
              <Text style={styles.signUpText}>Увійти</Text>
            </Pressable>
            <Pressable
              style={styles.logIn}
              // onPress={() => setModalVisibleSignIn(true)}
            >
              <Text style={styles.logInTextOpenModal}>
                Немає акаунту?{" "}
                <Text style={styles.logInTextOpenModalsignUpLink}>
                  Зареєструватися
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  signUp: {
    position: "absolute",
    bottom: 113,
    width: 343,
    height: 51,
    borderRadius: 100,
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    zIndex: 100,
  },
  logIn: {
    position: "absolute",
    bottom: 78,
    zIndex: 100,
  },
  signUpText: {
    color: "white",
    textAlign: "center",
  },
  logInText: {
    color: "white",
    textAlign: "center",
  },
  openRegister: {
    marginLeft: 0,
    marginBottom: 0,
    position: "absolute",
    width: "100%",
    height: 549,
    left: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 92,
  },
  openRegisterAddPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: "33%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: "grey",
  },
  addPhoto: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 14,
    right: -12.5,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    borderWidth: 1,
    padding: 0,
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  addIcon: {
    color: "#FF6C00",
    fontSize: 30,
    fontWeight: 200,
    position: "absolute",
    // top: -8.3,
    // left: 2.5,
    top: -5.3,
    left: 4,
  },
  signUpOpenModal: {
    position: "absolute",
    bottom: 113,
    width: 343,
    height: 51,
    borderRadius: 100,
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    zIndex: 100,
  },
  logInOpenModal: {
    position: "absolute",
    bottom: 78,
    zIndex: 100,
  },
  logInTextOpenModal: {
    color: "black",
  },
  logInTextOpenModalsignUpLink: {
    textDecorationLine: "underline",
    textDecorationColor: "grey",
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    marginBottom: 16,
    padding: 15,
  },
  signUpTextTitle: {
    fontSize: 30,
    marginBottom: 33,
  },
});
