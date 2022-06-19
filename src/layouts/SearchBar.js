import * as React from "react";
import PropTypes from "prop-types";

import { Search } from "../styles/all";

function SearchBar({
  placeholder,
  onChangeText,
  value,
  onFocus,
  sender,
  icon,
  onIconPress,
}) {
  const focusHandler = () => {
    if (sender === "HomeScreen") {
      return onFocus();
    } else {
      return;
    }
  };
  return (
    <Search
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      onFocus={focusHandler}
      sender={sender}
      icon={icon}
      onIconPress={onIconPress}
    />
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onIconPress: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  sender: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SearchBar;
