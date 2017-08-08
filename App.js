import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    message : "",
    todo : ["Apprendre React Native", "Construire une Application", "Batman"]
  }

  addTodo = () => {
    // this.setState({todo: this.state.message})
    var newTodo = this.state.message;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr,message:""});
  }

  listTodos = () =>  {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={ () =>this.supprTodo(t)}
            >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  supprTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  render() {
    return (
      <View style={styles.fond}>
        <View style={styles.container}>
          <Text style={styles.header}> Notes</Text>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({message:text})}
            value={this.state.message}
          />
          <Button
            title="Ajouter une Todo"
            color="green"
            onPress={this.addTodo}
            style={styles.button}
           />
           <View style={{marginTop: 100}} />
          {this.listTodos()}
          <StatusBar hidden={true}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fond: {
    flex:1,
    backgroundColor: "#E0F2F1"
  },
  container: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 18,
  }
});
