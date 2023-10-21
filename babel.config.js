module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"expo-router/babel",
			"nativewind/babel",
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [
						".ios.js",
						".android.js",
						".js",
						".ts",
						".tsx",
						".json",
						".svg",
						".png",
						".jpg",
					],
					alias: {
						tests: ["./tests/"],
						"@components": "./src/components",
						"@assets": "./src/assets",
						"@config": "./src/config",
					},
				},
			],
		],
	};
};
