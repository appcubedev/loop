import React from "react";
import { View } from "react-native";

type SizedBoxProps = {
	width?: number;
	height?: number;
};

export default function SizedBox({ width, height, ...props }: SizedBoxProps) {
	return <View style={{ width, height }} {...props} />;
}
