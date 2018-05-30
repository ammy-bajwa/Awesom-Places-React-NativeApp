import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListIthem from './src/components/ListIthem';
import uuid from 'uuid';
import MyImage from './src/images/img1.jpg';
import ModalDetails from './src/components/ModalDetails';


export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null,
    modalVisible: false
  }
  onClickPlaceHandler = place => {
    this.setState({
      selectedPlace: place,
      modalVisible: true
    });
  }
  closeModalHandler = () => {
    this.setState({
      selectedPlace: null,
      modalVisible: false
    })
  }
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };
  placeDeleteHandler = (placeId) => {
    this.setState((prevState) => ({
      places: prevState.places.filter((place, index) => {
        return place.key != prevState.selectedPlace.key
      }),
      modalVisible: false
    }));
  }
  addButtonHandler = () => {
    if (this.state.placeName.trim() === '') {
      return alert('Please Enter A Valid Name');
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          name: this.state.placeName, key: uuid(), image: {
            uri: "https://www.shareicon.net/download/2016/12/07/862735_map_512x512.png"
          }
        })
      }
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <ModalDetails
          modalVisible={this.state.modalVisible}
          selectedPlace={this.state.selectedPlace}
          closeModalHandler={this.closeModalHandler}
          placeDeleteHandler={this.placeDeleteHandler}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputElement}
            placeholder="Enter An Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title="Add" style={styles.inputButton} onPress={this.addButtonHandler} />
        </View>
        <FlatList
          style={styles.outPutContainer}
          data={this.state.places}
          renderItem={({ item }) => (
            <ListIthem
              placeName={item.name}
              placeImage={item.image}
              onPressIthem={() => this.onClickPlaceHandler(item)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputElement: {
    width: "70%"
  },
  inputButton: {
    width: "30%"
  },
  outPutContainer: {
    width: "100%"
  }
});
