import { Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "bold",
    color: Colors.accent500,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.accent500,
  },
});
