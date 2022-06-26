import PropTypes from "prop-types";
import * as React from "react";

import { MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

export const BookMarksScreen = ({ navigation: { navigate }, route }) => {
  console.log(route);
  return (
    <MainView>
      <MyHeader
        title="Bookmarks"
        onPressBack={() =>
          navigate("MoreScreen", {
            name: "Hello from Here",
          })
        }
        back={true}
        first={true}
        second={true}
        secondIcon="magnify"
        onSecondIconPress={() =>
          navigate("SearchScreen", {
            sender: "BookmarksScreen",
          })
        }
      />
    </MainView>
  );
};

BookMarksScreen.propTypes = {};

export default BookMarksScreen;
