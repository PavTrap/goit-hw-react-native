// import { useState } from 'react';
// import {
//   View,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import {
// 	container,
// 	bgContainer,
// 	keyboardView,
// 	contentWrapper,
// 	title,
// 	input,
// 	inputLast,
// 	passWrapper,
// 	btnPassShow,
// 	btnPassShowText,
// 	btn,
// 	btnText,
// 	link,
// 	linkText,
// 	linkTextUnderline,
//  } from '../AuthPagesStyles';
//  import {
// 	avatarWrapper,
// 	avatar,
// 	btnAddAvatar,
// 	btnAddAvatarLoad,
// 	btnAddAvatarSvg,
// 	btnAddAvatarSvgLoad,
//  } from './RegistrationScreen.styled';
//  import backgroundImg from '../../../assets/img/Photo_BG.png';
//  import SvgAddButton from '../../../assets/svg/SvgAddButton';

// const RegistrationScreen = () => {
// 	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
// 	const [isAvatar, setAvatar] = useState(false);
 
// 	const handleFocus = () => {
// 	  setIsShowKeyboard(true);
// 	};
 
// 	const handleKeyboardHide = () => {
// 	  setIsShowKeyboard(false);
// 	  Keyboard.dismiss();
// 	};

// 	return (
// 		<TouchableWithoutFeedback onPress={handleKeyboardHide}>
// 		  <View style={container}>
// 			 <ImageBackground source={backgroundImg} style={bgContainer}>
// 			 	<KeyboardAvoidingView
// 					 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// 					 style={keyboardView}
// 				  >
// 					<View style={{ ...contentWrapper, height: '67.61%' }}>
					
// 						<View style={avatarWrapper}>
// 							<Image style={avatar} />
// 							<TouchableOpacity style={isAvatar ? btnAddAvatarLoad : btnAddAvatar}>
// 							<SvgAddButton style={isAvatar ? btnAddAvatarSvgLoad : btnAddAvatarSvg} />
// 							</TouchableOpacity>
// 						</View>
// 						<Text style={{ ...title, marginTop: 92 }}>Реєстрація</Text>
// 						<TextInput style={input} placeholder="Логін" onFocus={handleFocus} />
// 						<TextInput
// 							style={input}
// 							placeholder="Адреса електронної пошти"
// 							onFocus={handleFocus}
// 						/>
// 						<View style={{ ...passWrapper, marginBottom: isShowKeyboard ? 323 : 43 }}>
// 							<TextInput
// 							style={{ ...input, ...inputLast }}
// 							placeholder="Пароль"
// 							onFocus={handleFocus}
// 							/>
// 							<TouchableOpacity style={btnPassShow}>
// 							<Text style={btnPassShowText}>Показати</Text>
// 							</TouchableOpacity>
// 						</View>
					
	
// 					{!isShowKeyboard && (
// 						<View>
// 							<TouchableOpacity style={btn}>
// 							<Text style={btnText}>Зареєструватися</Text>
// 							</TouchableOpacity>
// 							<TouchableOpacity style={link}>
// 							<Text style={linkText}>
// 								Вже є акаунт? <Text style={linkTextUnderline}>Увійти</Text>
// 							</Text>
// 							</TouchableOpacity>
// 						</View>
// 					)}
// 					</View>
// 				</KeyboardAvoidingView>
// 			 </ImageBackground>
// 		  </View>
// 		</TouchableWithoutFeedback>
// 	 );
// }
// export default RegistrationScreen;







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

	// import {} from './RegistrationScreen.styled';
	// import backgroundImg from '../../../assets/img/Photo_BG.png';
	import SvgAddButton from '../../../assets/svg/SvgAddButton';

	const initialState = {
		userName: "",
		email: "",
		password: "",
	 };

	const RegistrationScreen = () => {
		const [state, setState] = useState(initialState);
		const [isShowKeyboard, setIsShowKeyboard] = useState(false);
		const [isFocusInput, setIsFocusInput] = useState({
			userName: false,
			email: false,
			password: false,
		 });
		// const [name, setName] = useState("");
		// const [email, setEmail] = useState("");
  		// const [password, setPassword] = useState("");


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
					<View style={container}> 		
							<View style={formContainer}>
								<View style={avatarWrapper}>
									<TouchableOpacity>
		 								<View style={avatar}>
											<SvgAddButton style={btnAddAvatarSvg} />
										</View>
									</TouchableOpacity>
		 						</View> 
								<Text style={titleText}>Реєстрація</Text>
								<TouchableOpacity style={{position:"absolute", zIndex:1000, top:309, left:285}}>
                     		 <Text>Показати</Text>
                      	</TouchableOpacity>
								<View style={containerInput}>
									<TextInput 
										style={{
											...input,
											borderColor: isFocusInput.userName
											  ? "#FF6C00"
											  : "#F6F6F6",
											backgroundColor: isFocusInput.userName
											  ? "#FFFFFF"
											  : "#F6F6F6",
										 }}
										textAlign={"left"}
										placeholder="Логін" 
                    				placeholderTextColor={"#BDBDBD"}
										textContentType="username"
										value={state.userName.toString()}
										onFocus={() => {
											handleFocus(true),
											  setIsFocusInput({
												 ...isFocusInput,
												 userName: true,
											  });
										 }}
										 onBlur={() => {
											setIsFocusInput({
											  ...isFocusInput,
											  userName: false,
											});
										 }}
										 onChangeText={(value) =>
											setState((prevState) => ({
											  ...prevState,
											  userName: value,
											}))
										 }/>



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
										<Text style={btnTextTitle}>Зареєструватися</Text>
									</TouchableOpacity>
									<TouchableOpacity >
										<Text style={linkText}>
											Вже є акаунт? <Text style={linkTextUnderline}>Увійти</Text>
										</Text>
									</TouchableOpacity>
								</View>
							 )}
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		);
	}
	export default RegistrationScreen;