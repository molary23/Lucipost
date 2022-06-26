import * as React from "react";
import { Platform } from "react-native";

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
  const isAndroid = Platform.OS === "android";
  return (
    <Appbar.Header
      style={{
        height: isAndroid ? 30 : 60,
        marginBottom: isAndroid && 20,
        marginTop: isAndroid && 20,
        backgroundColor: "red",
      }}
    >
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
