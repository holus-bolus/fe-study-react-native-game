import { Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface InstructionTextProps {
  children: string;
}

const InstructionText = ({ children }: InstructionTextProps) => {
  return <Text style={styles.instructions}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructions: {
    color: Colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
  },
});
