import { Text, StyleSheet } from "react-native";

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
    color: "#ddb52f",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ddb52f",
  },
});
