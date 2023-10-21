import React from "react";
import { View } from "react-native";

export default function Container({ children }: any) {
	return <View className="px-4 py-3">{children}</View>;
}
