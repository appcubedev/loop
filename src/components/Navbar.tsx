import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { handleSignOut } from "utils/helpers/misc";

export default function Navbar() {
	return (
		<View className="flex flex-row items-center gap-4 mb-10">
			<Link href="/">Home</Link>
			<Link href="/settings">Settings</Link>
			<Link href="/user">User</Link>
			<TouchableOpacity onPress={handleSignOut}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}
