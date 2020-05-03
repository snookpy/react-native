import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export interface AboutProps {
    
}
 
const About: React.SFC<AboutProps> = () => {
    return (
        <View style={styles.container}>
            <Text>
                About Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})
 
export default About;