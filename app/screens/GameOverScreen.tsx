import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import Title from "@/app/components/UI/Title";
import PrimaryButton from "@/app/components/UI/PrimaryButton";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: (selectedNumber: number) => void;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={() => onStartNewGame(userNumber)}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.title500,
    backgroundColor: "rgba(240, 240, 240, 1)",
    marginVertical: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
