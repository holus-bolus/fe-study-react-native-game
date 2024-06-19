import { Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface InstructionTextProps {
  children: string;
  style?: object;
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructions, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructions: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "poppins-regular",
  },
});
