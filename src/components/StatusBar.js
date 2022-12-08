import React from "react";
import { StatusBar } from "react-native";
export default function StatusBarComp() {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor="#F3B324"
      translucent={true}
    />
  );
}
