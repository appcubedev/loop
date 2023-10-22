import { AntDesign } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import NetworkImg from "assets/images/network-2.svg";
import React, { useEffect } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
	useEffect(() => {
		configureGoogleSignIn();
	}, []);

	const configureGoogleSignIn = async () => {
		await GoogleSignin.configure({
			webClientId:
				"592349431198-r5rlemgt5nn2usqppf7370k2d9fmq7ut.apps.googleusercontent.com",
			iosClientId:
				"592349431198-p3a3dljocnaen0tg06lj56ijvm0j0dot.apps.googleusercontent.com",
		});
	};

	const handleGoogleSignin = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const resp = await GoogleSignin.signIn();
			const googleCredential = auth.GoogleAuthProvider.credential(resp.idToken);
			await auth().signInWithCredential(googleCredential);
		} catch (err) {
			console.log("🚀 ~ file: login.tsx:32 ~ err:", err);
		}
	};

	return (
		<SafeAreaView className="flex-1 justify-between">
			<View className="overflow-hidden flex-row justify-center flex-1 bg-red-400d">
				<NetworkImg
					width={Dimensions.get("screen").width - 50}
					className="-translate-y-10"
				/>
			</View>

			<View className="py-10 px-10">
				<Text className="font-semibold text-3xl text-center">
					Redefining How You Network
				</Text>
				<Text className="text-center font-light mt-2">
					Instantly share contact info and make connections with a simple tap.
				</Text>
				<TouchableOpacity
					className="bg-blue-500 rounded-xl py-3 mt-8 flex flex-row items-center justify-center"
					onPress={handleGoogleSignin}
				>
					<AntDesign name="google" color="white" size={20} />
					<Text className="text-center text-base text-white font-medium ml-2">
						Continue with Google
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
