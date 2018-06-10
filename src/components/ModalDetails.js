import React from 'react';
import { Modal, Text, Image, View, Button, StyleSheet,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModalDetails = props => {
    var details = null;
    if (props.selectedPlace) {
        details = (<View style={styles.container}>
            <Image source={props.selectedPlace.image} style={styles.imageContainer} />
            <Text style={styles.placeNameStyle}>{props.selectedPlace.name}</Text>
        </View>)
    }
    return (
        <Modal
            style={styles.container}
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
                props.closeModalHandler();
            }}>
            <View style={styles.detailsContainer}>{details}</View>
            <View  style={styles.modalSection}>
                <TouchableHighlight onPress={props.placeDeleteHandler}>
                    <Icon size={60} name='delete'/>
                </TouchableHighlight>
                <TouchableHighlight onPress={props.closeModalHandler}>
                    <Icon size={60} name='close-circle'/>
                </TouchableHighlight>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
    },
    container: {
        width: '100%'
    },
    imageContainer: {
        width: "100%",
        height: "40%",
    },
    placeNameStyle: {
        fontWeight: '400',
        fontSize: 50,
        textAlign: "center"
    },
    modalSection:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
export default ModalDetails;