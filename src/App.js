import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import LibList from './components/LibList';

const App = () => {
  return (
    <Provider store={createStore}>
      <View>
        <Header headerText="Technomation" />
        <LibList />
      </View>
    </Provider>
  );
};

export default App;