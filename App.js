import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListIthem from './src/components/ListIthem';


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
  addButtonHandler = () => {
    if (this.state.placeName.trim() === '') {
      return alert('Please Enter A Valid Name');
    }
    this.setState((prevState) => ({
      places: prevState.places.concat(this.state.placeName)
    }))
  };
  render() {
    outputPlaces = this.state.places.map((place, i) => {
      return <ListIthem
        key={i}
        placeName={place}
        onPressIthem={()=> alert(`Ithem ID : ${i}`)}
      />
    })
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
        <View style={styles.outPutContainer}>
          {
            outputPlaces
          }
        </View>
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
