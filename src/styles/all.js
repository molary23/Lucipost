import styled from "styled-components/native";
import { Text, View } from "react-native";
import {
  Searchbar,
  Button,
  Card,
  ActivityIndicator,
  Paragraph,
  Chip,
  List,
} from "react-native-paper";

export const MainView = styled(View)`
  flex: 1;
`;

export const ContentView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.spacing[1]};
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

export const ContentParagraph = styled(Text)`
  font-size: ${(props) => props.theme.fontSize[2]};
`;

export const ContentCard = styled(View)`
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

export const ContentCardActions = styled(View)`
  flex: 1;
  flex-direction: row;
`;

export const ContentCardButton = styled(Button)`
  flex: 0.5;
  align-items: center;
`;

export const LoaderView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const ContentCardContent = styled(Card.Content)`
  position: absolute;
  top: 120px;
`;

export const ContentCardView = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

export const TrendingListTitle = styled(Text)`
  color: ${(props) => props.theme.color[0]};
  font-size: ${(props) => props.theme.fontSize[3]};
  font-weight: ${(props) => props.theme.fontWeight[2]};
  letter-spacing: 1px;
  z-index: 9999;
`;

export const TrendingListCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

export const PostCardTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSize[2]};
  font-weight: ${(props) => props.theme.fontWeight[2]};
  text-transform: capitalize;
  margin-top: ${(props) => props.theme.spacing[1]};
`;

export const PostCardContent = styled(Paragraph)`
  font-size: ${(props) => props.theme.fontSize[2]};
  padding-top: ${(props) => props.theme.spacing[1]};
  text-align: justify;
`;

export const CategoryBox = styled(View)`
  min-height: ${(props) => props.theme.box[1]};
  padding-bottom: ${(props) => props.theme.spacing[3]};
`;

export const CategoryView = styled(View)`
  padding-bottom: ${(props) => props.theme.spacing[1]};
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoryHeader = styled(Text)`
  font-size: ${(props) => props.theme.fontSize[3]};
  font-weight: ${(props) => props.theme.fontWeight[2]};
`;

export const CategoryBoxView = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryListItem = styled(Chip)`
  margin-right: ${(props) => props.theme.spacing[1]};
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

export const AddCategoryView = styled(View)`
  flex: 1;
  background: transparent;
  justify-content: flex-end;
`;

export const AddCategoryTopDraw = styled(View)`
  background: #ccc;
  width: ${(props) => props.theme.spacing[4]};
  height: 5px;
  margin: ${(props) => props.theme.spacing[1]} 0px;
  align-self: center;
  border-radius: 5px;
`;

export const AddCategoryContent = styled(View)`
  background: #fff;
  height: 80%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ASView = styled(View)`
  flex: 1;
  background: transparent;
  justify-content: flex-end;
  padding: 0px ${(props) => props.theme.spacing[1]} 0px;
`;

export const ASContent = styled(View)`
  background: #fff;
  border-radius: 10px;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

export const ASClose = styled(View)`
  background: #fff;
  border-radius: 10px;
  text-align: center;
  font-color: ${(props) => props.theme.color[4]};
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

export const ASTitle = styled(View)`
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

export const SNView = styled(View)`
  flex: 1;
  justify-content: space-between;
`;

export const TSLink = styled(Text)`
  font-weight: 600;
`;

export const MoreList = styled(List.Item)`
  margin: -7.5px;
`;

export const MoreView = styled(View)`
  background: ${(props) => props.theme.color[0]};
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;
