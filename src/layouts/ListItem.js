import * as React from "react";
import { List } from "react-native-paper";
import PropTypes from "prop-types";

import { capitalizeAll } from "../utils/capitalize";

function ListItem({ title, leftIcon, rightIcon, color, onPress }) {
  return (
    <List.Item
      title={title}
      onPress={onPress}
      left={() => !!leftIcon && <List.Icon icon={leftIcon} color={color} />}
      right={() => !!rightIcon && <List.Icon icon={rightIcon} color={color} />}
      titleStyle={{ textTransform: "capitalize" }}
    />
  );
}

ListItem.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  color: PropTypes.string,
};

export default ListItem;
