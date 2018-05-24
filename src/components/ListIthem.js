import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListIthem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressIthem}>
            <View style={styles.listIthem}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    listIthem: {
        width: "100%",
        margin: 5,
        padding: 5,
        backgroundColor: "#eee"
    }
});

export default ListIthem;