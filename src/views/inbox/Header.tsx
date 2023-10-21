import { AntDesign } from "@expo/vector-icons";
import Avatar from "components/Avatar";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function InboxHeader() {
	return (
		<View className="flex justify-between">
			<View className="flex flex-row items-center justify-between">
				<TouchableOpacity onPress={router.back}>
					<AntDesign name="arrowleft" size={24} />
				</TouchableOpacity>
				<Text className="font-semibold text-base">Wanderlust Squad</Text>
				<Avatar text={"S"} />
			</View>
		</View>
	);
}
