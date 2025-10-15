import { Pressable } from "react-native";

export const Button = ({
  onPress,
  children,
}: {
  onPress?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        padding: 20,
        margin: 5,
        width: "50%",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: pressed ? "#bbb" : "#ddd",
      })}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
