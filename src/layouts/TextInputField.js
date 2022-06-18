import * as React from "react";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

function TextInputField({ label, icon, onChangeText, value, name, error }) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      onChangeText={onChangeText}
      value={value}
      name={name}
      right={<TextInput.Icon name={icon} />}
      error={error}
    />
  );
}

TextInputField.propTypes = {
  icon: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  value: PropTypes.any,
};
export default TextInputField;
