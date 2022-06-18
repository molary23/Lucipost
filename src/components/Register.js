import * as React from "react";

import { MainView } from "../styles/all";
import TextInputField from "../layouts/TextInputField";

function Register() {
  const [text, setText] = React.useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <MainView>
      <TextInputField
        onChangeText={(text) => setText(text)}
        label="Username"
        name="username"
        value={text}
        icon="account"
        error={false}
      />
    </MainView>
  );
}

export default Register;
