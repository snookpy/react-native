import * as React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export interface AddItemProps {
    addItem: (text: string) => void
}

const AddItem: React.SFC<AddItemProps> = ({addItem}) => {

    const [text, setText] = useState('')

    const onChange = (textValue: string) => setText(textValue)
    return (

        <View>
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} />
                    Add Item
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;