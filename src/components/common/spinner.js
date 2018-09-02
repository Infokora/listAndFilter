import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import propTypes from 'prop-types';

export const Spinner = ({ color = '#5f6be3', size = 25 }) => (
  <View style={style.wrapSpinner}>
    <ActivityIndicator
      color={color}
      size={Platform.OS === 'ios' ? 1 : size}
    />
  </View>
);

Spinner.propTypes = {
  color: propTypes.string,
  size: propTypes.number,
};

const style = StyleSheet.create({
  wrapSpinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
