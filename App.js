import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  StatusBar,
} from 'react-native';


import Header from './components/header';
import Neuronio from './components/neuronio';
import Input from './components/input';
import Output from './components/output';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const App = () => {

  const [input, setinput] = useState([
    {
      value: [
        { neuroKey: 1, neuroValue: 0.4 },
        { neuroKey: 2, neuroValue: 0.599 },
        { neuroKey: 3, neuroValue: 0.34 },
        { neuroKey: 4, neuroValue: 0.77 }], camadaKey: 1
    }
  ]);

  const [neuronios, setNeuronios] = useState([
    {
      value: [
        { neuroKey: 1, neuroValue: 0.4 },
        { neuroKey: 2, neuroValue: 0.5 },
        { neuroKey: 3, neuroValue: 0.34 },
        { neuroKey: 4, neuroValue: 0.77 },
        { neuroKey: 5, neuroValue: 0.77 },
        { neuroKey: 6, neuroValue: 0.27 }], camadaKey: 1
    },
    {
      value: [
        { neuroKey: 1, neuroValue: 0.6 },
        { neuroKey: 2, neuroValue: 0.9 },
        { neuroKey: 3, neuroValue: 0.43 },
        { neuroKey: 4, neuroValue: 0.75 }], camadaKey: 2
    },
    {
      value: [
        { neuroKey: 1, neuroValue: 0.7 },
        { neuroKey: 2, neuroValue: 0.3 },
        { neuroKey: 3, neuroValue: 0.6 },
        { neuroKey: 4, neuroValue: 0.27 }], camadaKey: 3
    },
    {
      value: [
        { neuroKey: 1, neuroValue: 0.8 },
        { neuroKey: 2, neuroValue: 0.1 },
        { neuroKey: 3, neuroValue: 0.76 },
        { neuroKey: 4, neuroValue: 0.87 }], camadaKey: 4
    },

  ]);

  const [output, setOutput] = useState([
    {
      value: [
        { neuroKey: 1, neuroValue: 0.0 },
        { neuroKey: 2, neuroValue: 0.0 },
        { neuroKey: 3, neuroValue: 0.0 },
        { neuroKey: 4, neuroValue: 0.0 }], camadaKey: 1
    }
  ]);

  return (
    <>
      <StatusBar barStyle='light-content' />

      <ScrollView style={styles.scrollView}>
        <Header />

        <SafeAreaView>
          {input.map((inputItem, index) => <Input neuronios={inputItem} key={index} />)}
        </SafeAreaView>

        <SafeAreaView>
          {neuronios.map((item, index) => <Neuronio neuronios={item} key={index} />)}
        </SafeAreaView>

        <SafeAreaView>
          {output.map((outputItem, index) => <Output neuronios={outputItem} key={index} />)}
        </SafeAreaView>


      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#012340',
  },
  list: {
    width: width,
    height: 300
  }

});

export default App;
