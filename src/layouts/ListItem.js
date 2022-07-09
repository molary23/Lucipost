import * as React from "react";
import { List } from "react-native-paper";
import PropTypes from "prop-types";

import { ListItems } from "../styles/all";

function ListItem({ title, icon, color, onPress }) {
  return (
    <ListItems
      title={title}
      onPress={onPress}
      left={() => <List.Icon icon={icon} color={color} />}
    />
  );
}

ListItem.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ListItem;
