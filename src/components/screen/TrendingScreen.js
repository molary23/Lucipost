import * as React from "react";
import Loader from "../../layouts/Loader";

import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { List } from "react-native-paper";

import { ContentView, MainView, TSLink } from "../../styles/all";
import TrendingPostal from "../../layouts/TrendingPostal";
import TrendingPostCard from "../../layouts/TrendingPostCard";
import MyHeader from "../../layouts/MyHeader";
import PostList from "../../layouts/PostList";

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
        <ScrollView>
          <View>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <List.Section>
                  <List.Subheader>Trending Posts</List.Subheader>
                  <TrendingPostal {...reduceData} />

                  {DATA.map((item, i) => {
                    return <PostList item={item} key={i} />;
                  })}
                  <TouchableOpacity
                    onPress={() =>
                      navigate("TrendMoreScreen", {
                        sender: "trending",
                        data: DATA,
                      })
                    }
                  >
                    <TSLink> See More</TSLink>
                  </TouchableOpacity>
                </List.Section>
              </>
            )}
          </View>
          <View>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <List.Section>
                  <List.Subheader>Top posts by Categories</List.Subheader>

                  {DATA.map((item, i) => {
                    return <PostList item={item} key={i} />;
                  })}
                  <TouchableOpacity
                    onPress={() =>
                      navigate("TrendMoreScreen", {
                        sender: "categories",
                        data: DATA,
                      })
                    }
                  >
                    <TSLink>See More</TSLink>
                  </TouchableOpacity>
                </List.Section>
              </>
            )}
          </View>
          <View>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <List.Section>
                  <List.Subheader>Top posts by Tags</List.Subheader>

                  {DATA.map((item, i) => {
                    return <PostList item={item} key={i} />;
                  })}
                  <TouchableOpacity
                    onPress={() =>
                      navigate("TrendMoreScreen", {
                        sender: "tags",
                        data: DATA,
                      })
                    }
                  >
                    <TSLink>See More</TSLink>
                  </TouchableOpacity>
                </List.Section>
              </>
            )}
          </View>
        </ScrollView>
      </ContentView>
    </MainView>
  );
}

export default TrendingScreen;
