import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from "react";

const buttonImg = require('./add.png');

	const RegistrationScreen = ({changeScrenn}) => {
		const [login, setLogin] = useState('');
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		const handleLogin = (text) => {setLogin(text)};
		const handleEmail = (text) => {setEmail(text)};
		const handlePassword = (text) => {setPassword(text)};

		const register = () => {
			if (!login || !email || !password) {
				alert("Enter all data")
				return;
			};
			console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
		};

		const passwShow =()=> alert(`Your password is: ${password}`);

		return (
			<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={ styles.containerKey }> 
				<View style={styles.container}>
					<View style={styles.pfotoContainer}>
						<TouchableOpacity style={ styles.addButton } activeOpacity={0.5}>
							<ImageBackground source={buttonImg} style={{width: '100%', height: '100%'}}/>
						</TouchableOpacity>
					</View>
					<Text style={ styles.title }>Registration</Text>

					<TextInput style={ styles.inputLogin } placeholder="Login" inputMode="text" value={ login } onChangeText={handleLogin}/>
        			<TextInput style={ styles.inputEmailPassword } placeholder="Email address" inputMode="email" value={ email }  onChangeText={handleEmail}/>
       			<TextInput style={ styles.inputEmailPassword } placeholder="Password" secureTextEntry={true} value={ password }  onChangeText={handlePassword}/>

					<TouchableOpacity style={ styles.passwShow } activeOpacity={0.5} onPress={passwShow}>
             		<Text style={ styles.passwShowText }>Show</Text>
        			</TouchableOpacity>  

        			<TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={register}>
          			<Text style={ styles.registerButtonText }>Register</Text>
        			</TouchableOpacity>

        			<TouchableOpacity style={ styles.loginLink } activeOpacity={0.5} onPress={() => changeScrenn(0) }>
             		<Text style={ styles.loginLinkText }>Already have an account? Log in</Text>
        			</TouchableOpacity> 
					
				</View>
			</KeyboardAvoidingView> 
		);
	}
	
	const styles = StyleSheet.create({
		containerKey:{
			justifyContent: "flex-end",
		},
		container:{
			backgroundColor: '#FFFFFF',
			alignItems: 'center',
			width: '100%',
			borderTopRightRadius: 25,
			borderTopLeftRadius:25,
		},
		pfotoContainer:{
			marginTop: -60,
			height: 120,
			width: 120,
			backgroundColor: '#F6F6F6',
			borderRadius: 16,
		},
		addButton:{
			marginTop: '65%',
			left: '90%',
			height: 25,
			width: 25,
			pointerEvents: "auto",
		},
		title:{
			fontWeight: '500',
      	fontSize: 30,
      	marginTop: 32,
      	lineHeight: 35,
		},
		inputLogin:{
			backgroundColor: '#F6F6F6',
			width: 343,
			height: 50,
			borderRadius: 8,
			marginTop: 33,
			padding: 16,
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: 16,
			lineHeight: 19,
		},
		inputEmailPassword:{
			backgroundColor: '#F6F6F6',
      	width: 343,
      	height: 50,
      	borderRadius: 8,
      	padding: 16,
      	marginTop: 16,
      	fontStyle: 'normal',
      	fontWeight: '400',
      	fontSize: 16,
      	position: 'relative',
		},
		passwShowText: {
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: 16,
			lineHeight: 19,
		 },
		 passwShow: {
			top: -34,
			left: 130,
		 },
		 registerButton: {
			backgroundColor: '#FF6C00',
			height: 50,
			width: 343, 
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 100,
			marginTop: 44,
		 },
		 registerButtonText:{
			 color: '#fff',
			 fontWeight: '400'
		 },
		 loginLink:{
			marginTop: 16,
			marginBottom: 66
		 },
		 loginLinkText:{
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: 16,
			lineHeight: 19,
		 },
	 });

	export default RegistrationScreen;