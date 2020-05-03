import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native';

export interface AddTodoProps {
    submitHandler: any;
}
 
const AddTodo: React.SFC<AddTodoProps> = ({submitHandler}) => {

    const [text, setText] = useState<string>('')

    const changeHandler = (val: string) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
            style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add todo' color="coral" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
 
export default AddTodo;