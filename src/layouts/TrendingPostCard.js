import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

import { TrendingListCard } from "../styles/all";

function TrendingPostCard(props) {
  const { title } = props;
  return (
    <TrendingListCard>
      <Card.Content>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card.Content>
    </TrendingListCard>
  );
}

export default TrendingPostCard;
