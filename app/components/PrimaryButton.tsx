import { View, Text, Pressable, StyleSheet } from "react-native";
import { ReactNode } from "react";

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  const pressHandler = () => {
    console.log("PrimaryButton pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#ddb52f",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
