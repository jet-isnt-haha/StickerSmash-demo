import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

const Button = ({ label, theme, onPress }: Props) => {
  const flag = theme === "primary";

  return (
    <View
      style={[
        styles.buttonContainer,
        flag && {
          borderWidth: 4,
          borderColor: "#ffd33d",
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        style={[styles.button, flag && { backgroundColor: "#fff" }]}
        onPress={flag ? onPress : () => alert("You pressed a btn")}
      >
        {flag && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, flag && { color: "#25292e" }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },

  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
