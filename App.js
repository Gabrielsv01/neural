import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/header';
import Neuronio from './components/neuronio';

const App = () => {

  const [neuronios, setNeuronios] = useState([
    {
      value: [
        { neuroKey: 1, neuroValue: 0.4 },
        { neuroKey: 2, neuroValue: 0.5 },
        { neuroKey: 3, neuroValue: 0.34 },
        { neuroKey: 4, neuroValue: 0.77 }], camadaKey: 1
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

  return (
    <>
      <StatusBar barStyle='light-content' />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

        <Header />

      </ScrollView>

      <FlatList
        style={styles.list}
        horizontal={false}
        data={neuronios}
        keyExtractor={(item, index) => item.camadaKey.toString()}
        renderItem={({ item }) => (
          <Neuronio neuronios={item} />
        )}
      />

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  neuronio: {

    borderColor: '#2f4f4f',
    backgroundColor: '#ffd700',
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    alignItems: 'center',
    paddingTop: 37
  },

  list: {

  }

});

export default App;
