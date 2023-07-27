import { useState } from "react";
import {
	  View,
	  ImageBackground,
	  Image,
	  TouchableOpacity,
	  TextInput,
	  Text,
	  KeyboardAvoidingView,
	  Platform,
	  Keyboard,
	  TouchableWithoutFeedback,
	  Pressable
	} from 'react-native';

	import {
		container, 
		bgImg, 
		formContainer, 
		avatarWrapper, 
		avatar, 
		btnAddAvatarSvg,
		titleText, 
		containerInput, 
		input, 
		buttonSection, 
		btnText, 
		btnTextTitle,
		linkText, 
		linkTextUnderline,
		borderActive
	} from '../AuthPagesStyles';


  const initialState = {
		userName: "",
		email: "",
		password: "",
	 };

const LoginScreen = () => {

  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState({
    userName: false,
    email: false,
    password: false,
   });

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };	 
  
  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

	return(
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView
           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
           style={container}
            >
        <View style={{...container, height:489}}> 		
            <View style={{...formContainer, paddingTop:32}}>
              <Text style={titleText}>Увійти</Text>
                      <TouchableOpacity style={{position:"absolute", zIndex:1000, top:183, left:285}}>
                      <Text>Показати</Text>
                      </TouchableOpacity>

              <View style={containerInput}>
                <TextInput 
                  style={{
                    ...input,
                    borderColor: isFocusInput.email
                      ? "#FF6C00"
                      : "#F6F6F6",
                    backgroundColor: isFocusInput.email
                      ? "#FFFFFF"
                      : "#F6F6F6",
                   }} 
                  textAlign={"left"}
                          placeholderTextColor={"#BDBDBD"}
                          keyboardType="email-address"
                          textContentType={"emailAddress"}
                          value={state.email}
                  placeholder="Адреса електронної пошти" 
                  onFocus={() => {
                    setIsShowKeyboard(true),
                      setIsFocusInput({
                       ...isFocusInput,
                       email: true,
                      });
                   }}
                   onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      email: false,
                    });
                   }}
                   onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                   }/>
                
                <TextInput 
                  style={{
                    ...input,
                    borderColor: isFocusInput.password
                      ? "#FF6C00"
                      : "#F6F6F6",
                    backgroundColor: isFocusInput.password
                      ? "#FFFFFF"
                      : "#F6F6F6",
                    marginBottom: 0,
                   }}
                   textAlign={"left"}
                   placeholderTextColor={"#BDBDBD"}
                   textContentType="password"
                   value={state.password.toString()}
                   secureTextEntry
                   placeholder="Пароль"
                   onFocus={() => {
                    setIsShowKeyboard(true),
                      setIsFocusInput({
                       ...isFocusInput,
                       password: true,
                      });
                   }}
                   onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      password: false,
                    });
                   }}
                   onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                   }/>            
              </View>
        
            </View>		
            {!isShowKeyboard && (
              <View style={buttonSection}>
                <TouchableOpacity style={btnText}>
                  <Text style={btnTextTitle}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={linkText}>
                   Немає акаунту? <Text style={{ textDecorationLine: 'underline' }}>Зареєструватися</Text>
                  </Text>
                </TouchableOpacity>
              </View>
             )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
} 
export default LoginScreen;