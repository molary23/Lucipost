import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import { Button } from "react-native-paper";

import { ContentView, MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

function NotificationScreen({ navigation: { navigate } }) {
  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 5 },
    });
  };

  React.useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return;
        }
      });
  }, []);

  return (
    <MainView>
      <MyHeader
        title="Notifications"
        second={true}
        secondIcon="tune"
        onSecondIconPress={() => navigate("CategoryScreen")}
      />
      <ContentView>
        <Text>This is the Personalise Page</Text>
        <Button
          onPress={triggerNotifications}
          title="Trigger Local Notifications"
          color="#841584"
          accessibilityLabel="Trigger Local Notifications"
        >
          Notify
        </Button>
      </ContentView>
    </MainView>
  );
}

export default NotificationScreen;
