import * as React from "react";
import PropTypes from "prop-types";

import { Btn } from "../styles/all";

function MyButton({ icon, mode, onPress, label }) {
  return (
    <Btn icon={icon} mode={mode} onPress={onPress}>
      {label}
    </Btn>
  );
}

MyButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default MyButton;
