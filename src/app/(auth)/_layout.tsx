import { Redirect, Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function layout() {
	const { user } = useSelector((state: RootState) => state.auth);

	if (!user) {
		return <Redirect href="/login" />;
	}

	return (
		<SafeAreaView>
			<Slot />
		</SafeAreaView>
	);
}
