import { Box, ScrollView, Stack, VStack, Input, Button } from 'native-base';
import React, { useState } from 'react';
import Values from 'values.js';
import ColorForm from '../ColorForm/ColorForm';
import ColorList from '../ColorList/ColorList';

const Home = () => {

  const [color, setColor] = useState('#123456');
  const [list, setList] = useState(new Values('#123456').all(10));
  const [error, setError] = useState(false);

  const onFormSubmit = () => {
    try {
      const newColors = new Values(color).all(10);
      setError(false);
      setList(newColors);
    } catch (ex) {
      setError(true);
      console.log(ex);
    }
  };
  return (
    <ScrollView flex={1}>
      <VStack flex={1}>
        <Box flex={1}>
          <Input
            size="md"
            placeholder="#123456"
            value={color}
            style={{ borderColor: error ? 'red' : 'gray', borderWidth: 1 }}
            onChangeText={text => setColor(text)}
          />
          <Button
            testID='tstBtnSubmit'
            onPress={() => {
              onFormSubmit(color);
            }}>
            Submit
          </Button>
        </Box>
        <ColorList list={list} />
      </VStack>
    </ScrollView>
  );
};

export default Home;
