import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  return (
    <View>
      <Text>
        {props.saludo} {props.name}
      </Text>
    </View>
  );
}

Saludar.propTypes = {
  saludo: PropTypes.string.isRequired,
  name: PropTypes.string,
};
