import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 35
    }
})
 
export default Home;