import Avatar from "components/Avatar";
import SizedBox from "components/SizedBox";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { expenseMessages } from "utils/data/chat";

export default function InboxBody() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} className="flex gap-3.5">
			{expenseMessages.map((message, idx) => (
				<View key={idx} className="flex flex-row">
					<Avatar text={message.name} />
					<SizedBox width={8} />
					<View className="bg-gray-100 rounded-xl flex-1 p-3.5">
						<Text>{message.msg}</Text>
					</View>
				</View>
			))}
		</ScrollView>
	);
}
