import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[textColor]}>
        {colorName} : {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
});
export default ColorBox;
