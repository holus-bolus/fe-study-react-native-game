import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import Title from "@/app/components/UI/Title";
import Card from "@/app/components/UI/Card";
import InstructionText from "@/app/components/UI/InstructionText";

interface StartGameScreenProps {
  onPickNumber: (selectedNumber: number) => void;
}

const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText: string) => {
    if (enteredNumber === "") {
      setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
    }
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ],
      );
      return;
    }
    onPickNumber(chosenNumber);
    setEnteredNumber("");
  };

  const cancelInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Start a New Game!</Title>
      <Card>
        <InstructionText>Select a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={cancelInputHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
});
