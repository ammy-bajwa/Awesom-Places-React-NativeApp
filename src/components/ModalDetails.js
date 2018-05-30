import React from 'react';
import { Modal, Text, Image, View, Button, StyleSheet } from 'react-native';



const ModalDetails = props => {
    var details = null;
    if (props.selectedPlace) {
        details = (<View>
            <Image source={props.selectedPlace.image} style={styles.imageContainer} />
            <Text style={styles.placeNameStyle}>{props.selectedPlace.name}</Text>
        </View>)
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={styles.detailsContainer}>{details}</View>
            <View>
                <Button title="Delete Place" onPress={props.placeDeleteHandler} />
                <Button title="Close" onPress={props.closeModalHandler} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        paddingLeft: '35%',

        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
    },
    imageContainer: {
        marginTop: "5%",
        width: "100%",
        height: "40%",
        flexDirection: "row",
        alignItems: "center"
    },
    placeNameStyle: {
        fontWeight: '400',
        fontSize: 50
    }
})
export default ModalDetails;