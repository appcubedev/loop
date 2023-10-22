import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";
import "@react-native-firebase/firestore";
import { Slot, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store from "store";
import { setUser } from "store/auth";

const firebaseConfig: any = {
	apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default function layout() {
	return (
		<Provider store={store}>
			<App>
				<Slot />
			</App>
		</Provider>
	);
}

const App = ({ children }: any) => {
	const dispatch = useDispatch();
	const [initializing, setInitializing] = useState(true);

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	function onAuthStateChanged(user: any) {
		dispatch(setUser(user?._user ?? null));
		if (user) router.replace("/");
		if (initializing) setInitializing(false);
	}

	return <View className="flex-1">{children}</View>;
};
