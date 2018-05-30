import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListIthem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressIthem}>
            <View style={styles.listIthem}>
                <Image source={props.placeImage} style={styles.imgStyle} />
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
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    imgStyle: {
        height: 30,
        width: 30,
        marginRight:8
    }
});

export default ListIthem;