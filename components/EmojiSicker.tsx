import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

const EmojiSicker = ({ imageSize, stickerSource }: Props) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSicker;

const styles = StyleSheet.create({});
