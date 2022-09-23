import { Box, Button, Input, Stack, VStack } from 'native-base';
import { useState } from 'react';

const ColorForm = ({ onFormSubmit }) => {

  const [color, setColor] = useState('#123456');
  return (
    <Box flex={1}>
      <Input
        size="md"
        placeholder="#123456"
        value={color}
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
  );
};

export default ColorForm;
