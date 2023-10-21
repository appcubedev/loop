import React from "react";
import { Text, View } from "react-native";
import { avatarColors } from "utils/constants/colors";

type AvatarProps = {
	text: string;
};

export default function Avatar({ text }: AvatarProps) {
	return (
		<View
			className="w-10 h-10 flex items-center justify-center rounded-full"
			style={{ backgroundColor: avatarColors[text[0]] }}
		>
			<Text className="text-base font-semibold text-white">{text[0]}</Text>
		</View>
	);
}
