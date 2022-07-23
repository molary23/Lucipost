import * as React from "react";
import { Chip } from "react-native-paper";

function MyChip() {
  <Chip closeIcon="information" onPress={() => console.log("Pressed")}>
    Example Chip
  </Chip>;
}

export default MyChip;
