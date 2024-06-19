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
    fontFamily: "poppins-bold",
    fontSize: 30,
    marginVertical: 10,
    color: Colors.title500,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.title500,
    backgroundColor: "rgba(240, 240, 240, 0.7)",
  },
});
