import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export interface ReviewDetailProps {
    
}
 
const ReviewDetail: React.SFC<ReviewDetailProps> = () => {
    return (
        <View style={styles.container}>
            <Text>
                ReviewDetail Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})
 
export default ReviewDetail;