import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {IItem} from '../App';


export interface ListItemProps {
    item: IItem;
    deleteItem: any;
}
 
const ListItem: React.SFC<ListItemProps> = ({
    item,
    deleteItem
}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                {item.text}
                </Text>
                <Icon 
                    name="remove" size={20} color={'firebrick'} 
                    onPress={() => deleteItem(item.id)}
                />
                
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    }
})
 
export default ListItem;