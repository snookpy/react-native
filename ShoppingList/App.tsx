
import uuid from 'uuid-random';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

export interface AppProps {

}

export interface IItem {
  id: string;
  text: string;
}

const App: React.SFC<AppProps> = () => {

  const [items, setItems] = useState<IItem[]>([{
    id: uuid(),
    text: 'Milk'
  },
  {
    id: uuid(),
    text: 'Egg'
  },
  {
    id: uuid(),
    text: 'Bread'
  },
  {
    id: uuid(),
    text: 'Juice'
  }])

  const deleteItem = (id: string) => {
    setItems(preItems => preItems.filter(f => f.id !== id))
  }

  const addItem = (text: string) => {

    if (text){
      setItems(preItems => [{id: uuid(), text}, ...preItems])
    } else {
      Alert.alert('error', 'Please enter an item', [{text: 'Ok'}])
    }
  }

  const renderFlexList = ({ item }: {item: IItem}) => (
    <ListItem item={item} deleteItem={deleteItem} />
  )

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={renderFlexList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
})

export default App;