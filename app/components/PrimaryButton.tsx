import { View, Text } from "react-native";
import { ReactNode } from "react";

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
