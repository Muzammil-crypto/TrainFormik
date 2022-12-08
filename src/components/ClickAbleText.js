import React from "react";
import { Text } from "react-native";
import styles from "../utils/App.component.style";
export default function ClickAbleText({ linkText }) {
  return <Text style={styles.clickAbleText}>{linkText}</Text>;
}
