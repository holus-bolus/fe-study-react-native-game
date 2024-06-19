import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "@/app/screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "@/app/screens/GameScreen";
import { Colors } from "@/constants/Colors";

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
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../../assets/images/bg-image.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
