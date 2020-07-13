import React from "react";
import { Image } from "react-native";
import { AppLoading as ExpoAppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default function AppLoading({ setIsAppReady }) {
  const cacheImages = (images) => {
    return images.map((image) => {
      return typeof image === "string"
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([require("../../../assets/icon.png")]);

    const fontAssets = cacheFonts([
      {
        "FuturaMD-Bold": require("../../../assets/fonts/FuturaMD-Bold.ttf"),
      },
      {
        "FuturaMD-Bold-Italic": require("../../../assets/fonts/FuturaMD-Bold-Italic.ttf"),
      },
      {
        "FuturaMD-Light": require("../../../assets/fonts/FuturaMD-Light.ttf"),
      },
      {
        "FuturaMD-Medium": require("../../../assets/fonts/FuturaMD-Medium.ttf"),
      },
      {
        "FuturaMD-Medium-Italic": require("../../../assets/fonts/FuturaMD-Medium-Italic.ttf"),
      },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
