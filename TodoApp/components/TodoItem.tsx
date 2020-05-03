import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ITodo from 'ITodo';


export interface TodoItemProps {
    item: ITodo;
    deleteItem: (id: string) => void
}
 
const TodoItem: React.SFC<TodoItemProps> = ({item, deleteItem}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
 
export default TodoItem;