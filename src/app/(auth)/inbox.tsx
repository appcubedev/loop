import React from "react";
import { Dimensions, View } from "react-native";
import InboxBody from "views/inbox/Body";
import InboxEntry from "views/inbox/Entry";
import InboxHeader from "views/inbox/Header";

export default function Inbox() {
	return (
		<View
			className="justify-between px-4 pt-1"
			style={{ height: Dimensions.get("screen").height - 75 }}
		>
			<View>
				<InboxHeader />
				<View
					className="mt-3"
					style={{ height: Dimensions.get("screen").height - 180 }}
				>
					<InboxBody />
				</View>
			</View>
			<InboxEntry />
		</View>
	);
}
