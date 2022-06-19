import * as React from "react";
import Loader from "../../layouts/Loader";

import { ContentView, MainView } from "../../styles/all";

function TrendingScreen() {
  return (
    <MainView>
      <ContentView>
        <Loader />
      </ContentView>
    </MainView>
  );
}

export default TrendingScreen;
