import * as React from "react";

import PropTypes from "prop-types";
import { Appbar } from "react-native-paper";

function MyHeader({
  title,
  back,
  first,
  second,
  firstIcon,
  secondIcon,
  onFirstIconPress,
  onSecondIconPress,
  onPressBack,
}) {
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={onPressBack} />}
      <Appbar.Content title={title} />
      {first && (
        <Appbar.Action icon="magnify" onPress={() => console.log("second")} />
      )}
      {second && (
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => console.log("third")}
        />
      )}
    </Appbar.Header>
  );
}

MyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
  first: PropTypes.bool,
  second: PropTypes.bool,
  firstIcon: PropTypes.string,
  secondIcon: PropTypes.string,
  onFirstIconPress: PropTypes.func,
  onSecondIconPress: PropTypes.func,
  onPressBack: PropTypes.func,
};

export default MyHeader;
