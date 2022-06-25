import * as React from "react";
import { Card, Title } from "react-native-paper";

import {
  ContentCardContent,
  TrendingListCard,
  TrendingListTitle,
  ContentCardView,
} from "../styles/all";

function TrendingPostal(props) {
  return (
    <TrendingListCard>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <ContentCardView>
        <ContentCardContent>
          <TrendingListTitle
            style={{
              textShadowColor: "rgba(0, 0, 0, 1)",
              textShadowOffset: { width: 3, height: 1 },
              textShadowRadius: 2,
            }}
          >
            Main Trend {props[0].title}
          </TrendingListTitle>
        </ContentCardContent>
      </ContentCardView>
    </TrendingListCard>
  );
}

export default TrendingPostal;
