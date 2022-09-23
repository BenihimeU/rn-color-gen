import {Box, FlatList, Stack, Text, VStack} from 'native-base';
import React from 'react';
import {View} from 'react-native';

const ColorList = ({list}) => {
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');
  const renderItem = (index, item) => {
    console.log(item);
    const hexValue = rgbToHex(item.rgb[0], item.rgb[1], item.rgb[2]);
    return (
      <Box flex={1} key={index} bg={hexValue} height="40">
        <Text fontSize="lg" color={index < 10 ? '#000' : '#FFF'}>
          {item.weight}%
        </Text>
        <Text fontSize="lg" color={index < 10 ? '#000' : '#FFF'}>
          {hexValue}
        </Text>
      </Box>
    );
  };
  return (
    // <FlatList data={list} renderItem={(item) => renderItem(item)}></FlatList>
    <>
      <Box flex={1} paddingTop={10}>
        <Text fontSize={'md'}>Colors list</Text>
        {list.map((item, index) => {
          return renderItem(index, item);
        })}
      </Box>
    </>
  );
};

export default ColorList;
