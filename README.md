Simple template to reuse for Expo Router


commands run

`npx create-expo-app tabsRouting -t expo-template-blank-typescript`

`npx expo install react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler`

`npx expo install react-native-web@~0.19.6 react-dom@18.2.0`

app.json:

```
{
	"expo": {
		"name": "tabsRouting",
		"slug": "tabsRouting",
		"scheme": "tabs-routing",
		"version": "1.0.0",
		"orientation": "portrait",
		"icon": "./assets/icon.png",
		"userInterfaceStyle": "light",
		"splash": {
			"image": "./assets/splash.png",
			"resizeMode": "contain",
			"backgroundColor": "#ffffff"
		},
		"assetBundlePatterns": [
			"**/*"
		],
		"ios": {
			"supportsTablet": true
		},
		"android": {
			"adaptiveIcon": {
				"foregroundImage": "./assets/adaptive-icon.png",
				"backgroundColor": "#ffffff"
			}
		},
		"web": {
			"favicon": "./assets/favicon.png",
			"bundler": "metro"
		},
		"plugins": [
			"expo-router"
		],
		"experiments": {
			"typedRoutes": true
		}
	}
}
```
babel.config.js:

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel', 'react-native-reanimated/plugin']
  };
};

```
package.json:

```
{
  "name": "tabsrouting",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~49.0.15",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "expo-linking": "~5.0.2",
    "expo-constants": "~14.4.2",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-web": "~0.19.6",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.14",
    "typescript": "^5.1.3"
  },
  "private": true
}
```
