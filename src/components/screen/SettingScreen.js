import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import MyButton from "../../layouts/MyButton";

function SettingScreen({ navigation }) {
  return (
    <View>
      <Text>Settings</Text>
      <MyButton
        icon="check-all"
        label="Submit"
        mode="contained"
        onPress={() =>
          navigation.navigate("WebKitScreen", {
            user: "Molary",
          })
        }
      />
    </View>
  );
}

export default SettingScreen;
