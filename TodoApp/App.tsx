import React, {useState} from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native';

import ITodo from './ITodo'
 
const App: React.SFC = () => {

  const [todos, setTodos] = useState<ITodo[]>([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);


  const renderItem = ({ item }: {item: ITodo}) => (
    <Text>
      {item.text}
    </Text>
  )

  return (  
    <View style={styles.container}>
      {/* {header} */}

      <View  style={styles.content}>
          {/* {to form} */}

          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={renderItem}
            />
          </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20
  }
})
 
export default App;