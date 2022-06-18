import * as React from "react";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

function TextInput({ label, icon, onChange }) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      onChange={onChange}
      right={<TextInput.Icon name={icon} />}
    />
  );
}

TextInput.propTypes = {
  label: PropTypes.string.required,
  icon: PropTypes.string.required,
  onChange: PropTypes.func.required,
};
export default TextInput;
