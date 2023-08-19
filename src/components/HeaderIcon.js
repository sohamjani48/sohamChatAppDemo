import React from 'react';
import {Image, StyleSheet} from 'react-native';

const HeaderIcon = ({source}) => {
  return <Image source={source} style={styles.icon} resizeMode="contain" />;
};

export default HeaderIcon;

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18,
  },
});
