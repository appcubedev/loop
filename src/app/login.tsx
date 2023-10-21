import { AntDesign } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import MoneyImg from "assets/images/money.svg";
import React, { useEffect } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

export default function login() {
	const width = Dimensions.get("screen").width - 100;

	useEffect(() => {
		configureGoogleSignIn();
	}, []);

	const configureGoogleSignIn = async () => {
		await GoogleSignin.configure({
			// scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
			webClientId:
				"356701098833-6crs1pruc0t3bq7sp1pe1rmo5kuljrcc.apps.googleusercontent.com",
			iosClientId:
				"356701098833-rvde4fkvm8eakd13dqa9bg1d0qm7psrb.apps.googleusercontent.com",
		});
	};

	const handleGoogleSignin = async () => {
		try {
			console.log("check 1");
			await GoogleSignin.hasPlayServices();
			console.log("check 2");
			const resp = await GoogleSignin.signIn();
			console.log("🚀 ~ file: login.tsx:29 ~ handleGoogleSignin ~ resp:", resp);
			const googleCredential = auth.GoogleAuthProvider.credential(resp.idToken);
			await auth().signInWithCredential(googleCredential);
		} catch (err) {
			console.log("🚀 ~ file: login.tsx:32 ~ err:", err);
		}
	};

	return (
		<View className="h-screen flex justify-between py-20">
			<View className="flex flex-row justify-center">
				<MoneyImg width={width} />
			</View>
			<View className="py-14 px-10">
				<Text className="font-semibold text-3xl text-center">
					Your Group Expenses, Elevated
				</Text>
				<Text className="text-center font-light mt-2">
					Enjoy together, Share costs without hassle, so you can focus on what
					truly matters
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
		</View>
	);
}
