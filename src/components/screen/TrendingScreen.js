import * as React from "react";
import Loader from "../../layouts/Loader";

import { FlatList } from "react-native";

import { ContentView, MainView } from "../../styles/all";
import TrendingPostal from "../../layouts/TrendingPostal";
import TrendingPostCard from "../../layouts/TrendingPostCard";
import MyHeader from "../../layouts/MyHeader";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const reduceData = DATA.splice(0, 1);

const Item = ({ title }) => <TrendingPostCard title={title} />;

function TrendingScreen({ navigation: { navigate } }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <MainView>
      <MyHeader
        title="Trending Stories"
        second={true}
        secondIcon="tune"
        onSecondIconPress={() => navigate("CategoryScreen")}
      />
      <ContentView>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <TrendingPostal {...reduceData} />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </ContentView>
    </MainView>
  );
}

export default TrendingScreen;
