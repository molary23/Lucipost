import * as React from "react";
import { Platform } from "react-native";

import PropTypes from "prop-types";
import { Appbar } from "react-native-paper";

function MyHeader({
  title,
  back,
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
        backgroundColor: "#5ea1ed",
      }}
    >
      {back && <Appbar.BackAction onPress={onPressBack} color="#fff" />}
      <Appbar.Content
        title={title}
        titleStyle={{ textAlign: "center", color: "#fff" }}
      />
      {!!firstIcon && (
        <Appbar.Action
          icon={firstIcon}
          onPress={onFirstIconPress}
          color="#fff"
        />
      )}
      {!!secondIcon && (
        <Appbar.Action
          icon={secondIcon}
          onPress={onSecondIconPress}
          color="#fff"
        />
      )}
    </Appbar.Header>
  );
}

MyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
  firstIcon: PropTypes.string,
  secondIcon: PropTypes.string,
  onFirstIconPress: PropTypes.func,
  onSecondIconPress: PropTypes.func,
  onPressBack: PropTypes.func,
};

export default MyHeader;
