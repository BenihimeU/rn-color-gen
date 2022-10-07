import { Box, ScrollView, Stack, VStack, Input, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import Values from 'values.js';
import ColorForm from '../ColorForm/ColorForm';
import ColorList from '../ColorList/ColorList';
import RazorpayCheckout from 'react-native-razorpay';

const key_id = 'rzp_test_puo31ZsJVMrFur';
const key_secret = 'elh7sX6S6pOdeRnV5uP5sDKv'
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

  useEffect(() => { }, []);

  const onRazorPayRequested = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: key_id, // Your api key
      amount: '100',
      name: 'Test Payment',
      prefill: {
        email: 'test@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: { color: '#F37254' },
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`${error.description}`);
      });
  }

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
              onRazorPayRequested();
            }}>
            Razor Pay (External)
          </Button>
        </Box>
        <ColorList list={list} />
      </VStack>
    </ScrollView>
  );
};

export default Home;
