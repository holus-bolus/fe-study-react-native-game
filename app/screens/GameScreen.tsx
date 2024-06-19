import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "@/app/components/UI/Title";
import { useEffect, useState } from "react";
import NumberContainer from "@/app/components/game/NumberContainer";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import InstructionText from "@/app/components/UI/InstructionText";

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

const generateNumberBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  let rndNum;
  do {
    rndNum = Math.floor(Math.random() * (max - min) + min);
  } while (rndNum === exclude);
  return rndNum;
};

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      Alert.alert("Game Over", `Your number is ${currentGuess}`, [
        { text: "Okay", style: "cancel" },
      ]);
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      setMaxBoundary(currentGuess);
    } else {
      setMinBoundary(currentGuess + 1);
    }

    const nextNumber = generateNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <InstructionText>Higher or Lower</InstructionText>
        <PrimaryButton onPress={() => nextGuessHandler("lower")}>
          Lower
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler("greater")}>
          Greater
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
});
