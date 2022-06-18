import * as React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const PageText = styled(Text)`
  color: ${(props) => props.theme.color[3]};
`;

function Register() {
  return (
    <View>
      <PageText>Register Here</PageText>
    </View>
  );
}

export default Register;
