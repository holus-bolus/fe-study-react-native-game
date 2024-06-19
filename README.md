# React Native Minigame

## Overview

This project is a React Native minigame app using Expo. It features a gradient background, an image background, and a game start screen with input and buttons.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Screens](#screens)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-native-minigame.git
   cd react-native-minigame
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed (version 17 or higher).

   ```bash
   npm install
   ```

3. **Install Expo CLI:**

   If you haven't already installed Expo CLI, install it globally:

   ```bash
   npm install -g expo-cli
   ```

4. **Start the project:**

   ```bash
   npx expo start
   ```

   This will start the Expo development server and provide you with a QR code to run the app on your device using the Expo Go app.

## Usage

- Scan the QR code provided by `expo start` using the Expo Go app on your Android or iOS device.
- You can also run the app on an Android or iOS emulator.

## Project Structure

```plaintext
react-native-minigame/
├── app/
│   ├── tabs/
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   └── index.tsx
│   ├── screens/
│   │   ├── StartGameScreen.tsx
│   ├── components/
│   │   └── PrimaryButton.tsx
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   │   ├── bg-image.png
│   │   │   ├── adaptive-icon.png
│   │   │   ├── favicon.png
│   │   │   ├── icon.png
│   │   │   ├── partial-react-logo.png
│   │   │   ├── react-logo@2x.png
│   │   │   ├── react-logo@3x.png
│   │   │   └── splash.png
│   ├── constants/
│   ├── hooks/
│   ├── node_modules/
│   ├── scripts/
│   ├── .expo/
│   ├── .gitignore
│   ├── app.json
│   ├── babel.config.js
│   ├── expo-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── tsconfig.json
```

## Components

### HomeScreen

The `HomeScreen` component is the main screen of the app, featuring a linear gradient and an image background with a semi-transparent effect. It includes the `StartGameScreen` component.

```tsx
import { StyleSheet, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import StartGameScreen from "@/app/screens/StartGameScreen"

export default function HomeScreen() {
 

```tsx
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/images/bg-image.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.5 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
})
```

### StartGameScreen

The `StartGameScreen` component includes a number input field and two buttons: "Confirm" and "Reset". These buttons are custom components called `PrimaryButton`.

```tsx
import { View, TextInput, StyleSheet } from "react-native"
import PrimaryButton from "@/app/components/PrimaryButton"

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#7e0f6d",
    borderRadius: 10,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
})
```

### PrimaryButton

The `PrimaryButton` component is a custom button with a press handler that logs a message to the console.

```tsx
import { View, Text, Pressable, StyleSheet } from "react-native"
import { ReactNode } from "react"

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  const pressHandler = () => {
    console.log("PrimaryButton pressed")
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#ddb52f",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
})
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file further to suit your project's specific details and requirements. If you have any more questions or need additional information, let me know!
