import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function InboxEntry() {
	return (
		<View className="h-12 flex flex-row items-center gap-2">
			<TouchableOpacity className="h-full flex-1 bg-gray-100 px-4 rounded-full justify-center">
				<Text className="font-light text-gray-500">
					Create your expense here
				</Text>
			</TouchableOpacity>
			<TouchableOpacity className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
				<Feather name="menu" size={24} />
			</TouchableOpacity>
		</View>
	);
}
