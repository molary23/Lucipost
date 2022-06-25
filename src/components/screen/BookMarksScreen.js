import PropTypes from "prop-types";
import * as React from "react";

import { MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

export const BookMarksScreen = (props) => {
  return (
    <MainView>
      <MyHeader title="Bookmarks" />
    </MainView>
  );
};

BookMarksScreen.propTypes = {};

export default BookMarksScreen;
