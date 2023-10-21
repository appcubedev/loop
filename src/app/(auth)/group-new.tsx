import Container from "components/Container";
import React from "react";
import {
	Dimensions,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

export default function GroupNew() {
	const handleCreate = () => {
		router.back();
	};

	return (
		<Container>
			<View
				className="flex justify-between"
				style={{ height: Dimensions.get("screen").height - 100 }}
			>
				<View>
					<View className="flex flex-row items-center gap-2">
						<TouchableOpacity onPress={router.back}>
							<Entypo name="chevron-thin-left" size={24} />
						</TouchableOpacity>
						<Text className="font-semibold text-3xl">New group</Text>
					</View>
					<View className="py-5 flex flex-col gap-3.5">
						<View>
							<Text className="mb-1.5 text-base">Name</Text>
							<TextInput
								placeholder="Enter group name here"
								className="border-2 border-gray-300 py-4 px-3 rounded-md"
							/>
						</View>
						<View>
							<Text className="mb-1.5 text-base">Members (Email)</Text>

							<TextInput
								multiline={true}
								numberOfLines={4}
								// onChangeText={setText}
								// value={text}
								placeholder="Enter member emails here"
								className="border-2 border-gray-300 py-4 px-3 rounded-md"
							/>
						</View>
					</View>
				</View>
				<TouchableOpacity
					className="bg-blue-600 py-3 rounded-lg"
					onPress={handleCreate}
				>
					<Text className="text-white text-center font-semibold text-base">
						Create
					</Text>
				</TouchableOpacity>
			</View>
		</Container>
	);
}
