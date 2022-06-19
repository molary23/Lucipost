import * as React from "react";
import { Appbar } from "react-native-paper";

function MyHeader({ title }) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => console.log("first")} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => console.log("second")} />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => console.log("third")}
      />
    </Appbar.Header>
  );
}

export default MyHeader;
