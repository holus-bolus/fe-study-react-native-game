import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "@/app/screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "@/app/screens/GameScreen";

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };
  let screen = <StartGameScreen onPickNumber={startGameHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/images/bg-image.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.5 }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
