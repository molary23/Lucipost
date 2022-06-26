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
    <Appbar.Header mode="center-aligned">
      {back && <Appbar.BackAction onPress={onPressBack} />}
      <Appbar.Content title={title} />
      {first && <Appbar.Action icon={firstIcon} onPress={onFirstIconPress} />}
      {second && (
        <Appbar.Action icon={secondIcon} onPress={onSecondIconPress} />
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
