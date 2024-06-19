import { View, Text, Button, StyleSheet } from "react-native";
import Title from "@/app/components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
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
