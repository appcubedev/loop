import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import _ from "lodash";
import { avatarColors } from "utils/constants/colors";
import classNames from "classnames";
import { router } from "expo-router";
import Avatar from "components/Avatar";

export default function ChatSingle({ name, bordered }: any) {
	const avatar: any = _.upperCase(name[0]);

	const handleOpenInbox = () => {
		router.push("/inbox");
	};

	return (
		<TouchableOpacity
			className={classNames(
				"py-3 border-gray-100 flex flex-row items-center gap-2",
				{ "border-b": bordered }
			)}
			onPress={handleOpenInbox}
		>
			<View>
				<Avatar text={name} />
			</View>
			<Text className="text-lg">{name}</Text>
		</TouchableOpacity>
	);
}
