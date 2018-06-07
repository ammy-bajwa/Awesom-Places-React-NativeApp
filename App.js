import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListIthem from './src/components/ListIthem';
import uuid from 'uuid';
import MyImage from './src/images/img1.jpg';
import ModalDetails from './src/components/ModalDetails';
import { connect } from 'react-redux';
import { addPlace, closeModal, placeClick, deletePlace } from './src/store/actions';



class App extends React.Component {
  state = {
    placeName: '',
  }
  onClickPlaceHandler = place => {
    return this.props.placeClick(place)
  }
  closeModalHandler = () => {
    return this.props.closeModal()
  }
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };
  placeDeleteHandler = (placeId) => {
    return this.props.deletePlace();
  }
  addButtonHandler = () => {
    if (this.state.placeName.trim() === '') {
      return alert('Please Enter A Valid Name');
    }
    return this.props.addPlace(this.state.placeName);
  };
  render() {
    return (
      <View style={styles.container}>
        <ModalDetails
          modalVisible={this.props.places.modalVisible}
          selectedPlace={this.props.places.selectedPlace}
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
          data={this.props.places.places}
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

const mapStateToProps = state => {
  return {
    places: state.places
  }
};
const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName) => dispatch(addPlace(placeName)),
    closeModal: () => dispatch(closeModal()),
    placeClick: (place) => dispatch(placeClick(place)),
    deletePlace: () => dispatch(deletePlace())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);