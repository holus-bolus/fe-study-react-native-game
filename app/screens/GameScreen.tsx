import { View, Text, Button, StyleSheet } from "react-native";
import Title from "@/app/components/UI/Title";
import { useState } from "react";
import NumberContainer from "@/app/components/game/NumberContainer";

interface GameScreenProps {
  userNumber: number;
}

const generateNumberBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Button title="+"></Button>
        <Button title="-"></Button>
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
