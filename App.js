import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListIthem from './src/components/ListIthem';
import uuid from 'uuid';


export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };
  placeDeleteHandler = (id) => {
    this.setState((prevState) => ({
      places: prevState.places.filter((place, index) => {
        return place.id !== id
      })
    }));
  }
  addButtonHandler = () => {
    if (this.state.placeName.trim() === '') {
      return alert('Please Enter A Valid Name');
    }
    this.setState((prevState) => ({
      places: prevState.places.concat({ value: this.state.placeName, key: uuid() })
    }))
  };
  render() {
    return (
      <View style={styles.container}>
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
          data={this.props.places}
          renderItem={({ item }) => {
            <ListIthem
              placeName={item.value}
              onPressIthem={() => this.placeDeleteHandler(item.key)}
            />
          }}
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
