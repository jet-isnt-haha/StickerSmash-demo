import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/b_9729202d74ee0777742f0dbea8da3823.jpg");
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>Learning By jet-isnt-haha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
