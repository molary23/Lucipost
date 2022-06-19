import styled from "styled-components/native";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar, Button } from "react-native-paper";

export const MainView = styled(View)`
  flex: 1;
`;

export const Search = styled(Searchbar)`
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

export const Btn = styled(Button)`
  margin-top: ${(props) => props.theme.spacing[2]};
`;

export const FormView = styled(View)`
  flex: 1;
  background: blue;
  justify-content: flex-end;
  padding: ${(props) => props.theme.spacing[2]};
`;

export const FormCard = styled(View)`
  flex: 0.7;
  background: red;
  padding: ${(props) => props.theme.spacing[2]};
  width: 98%;
  margin: 0 auto;
`;
