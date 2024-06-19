import { StyleSheet, View, Text } from "react-native";
import StartGameScreen from "@/app/screens/StartGameScreen";

export default function HomeScreen() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
