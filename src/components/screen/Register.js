import * as React from "react";
import { CommonActions } from "@react-navigation/native";

import { MainView } from "../../styles/all";
import TextInputField from "../../layouts/TextInputField";
import Button from "../../layouts/MyButton";

function Register({ navigation }) {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");

  const changeEmailHandler = (value) => {
    setEmail(value);
  };

  const changeUsernameHandler = (value) => {
    setUsername(value);
  };

  return (
    <MainView>
      <TextInputField
        onChangeText={(username) => changeUsernameHandler(username)}
        label="Username"
        value={username}
        icon="account"
        error={false}
      />

      <TextInputField
        onChangeText={(email) => changeEmailHandler(email)}
        label="Email"
        value={email}
        icon="email"
        error={false}
      />

      <TextInputField
        onChangeText={(text) => setPassword(text)}
        label="Password"
        value={password}
        icon="eye"
        error={false}
      />
      <TextInputField
        onChangeText={(text) => setConfirmPassword(text)}
        label="Password"
        value={confirmPassword}
        icon="eye"
        error={false}
      />

      <Button
        icon="check-all"
        label="Submit"
        mode="contained"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: "TabBar",
                  params: { user: "jane" },
                },
              ],
            })
          )
        }
      />
    </MainView>
  );
}

export default Register;
