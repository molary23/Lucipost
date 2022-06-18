import styled from "styled-components/native";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export const MainView = styled(View)`
  padding: ${(props) => props.theme.spacing[1]};
  flex: 1;
`;

export const Search = styled(Searchbar)`
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;
