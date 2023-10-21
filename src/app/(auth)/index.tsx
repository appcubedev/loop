import { FontAwesome5 } from "@expo/vector-icons";
import Container from "components/Container";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { groups } from "utils/data/chat";
import ChatSingle from "views/home/ChatSingle";

export default function home() {
	return (
		<Container>
			<View className="flex flex-row items-center justify-between">
				<Text className="font-semibold text-4xl">Groups</Text>
				<TouchableOpacity
					className="bg-gray-100 h-9 w-9 flex items-center justify-center rounded-full"
					onPress={() => router.push("/group-new")}
				>
					<FontAwesome5 name="pen" size={16} />
				</TouchableOpacity>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				className="flex flex-col mt-4"
			>
				{groups.map((group, idx) => (
					<ChatSingle key={idx} {...group} bordered={idx < groups.length - 1} />
				))}
			</ScrollView>
		</Container>
	);
}
