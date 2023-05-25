/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import CustomText from './components/CustomText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome';




function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input !== '') {
      setTodos([...todos, { text: input, checked: false }]);
      setInput('');
    }
  };

  const handleDel = (id) => {
    const updatedTodos = todos.filter((_, index) => index !== id);
    setTodos(updatedTodos);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === id) {
        return { ...todo, checked: !todo.checked }; // Toggle checked state
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  

  return (
    <View style={styles.cont}>
      <View style={styles.form}>
        <TextInput style={styles.input} value={input} onChangeText={(text) => setInput(text)} placeholder='Add' />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={styles.btnText}>Add</Text></TouchableOpacity>
      </View>
      <View >
        {todos.map((t, i) => (
          <View key={i} style={t.checked ? [styles.todo, styles.todoChecked] : styles.todo}>
            <CustomText style={styles.todoText} text={t.text}/>
            <View style={styles.todoBtns}>
              <TouchableOpacity onPress={() => handleCheck(i)}>{/* <CustomText style={styles.todoBtnsText} text ={t.checked ? 'Uncheck' : 'Check'} /> */}<Icon name={t.checked ? 'repeat' : 'check'} size={30} color={t.checked ? 'blue' : 'green'} /></TouchableOpacity>
              <TouchableOpacity onPress={() => handleDel(i)}>{/* <CustomText style={styles.todoBtnsText} text={"Del"} /> */}<Icon name="trash" size={30} color="red" /></TouchableOpacity>
            </View>
            

          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    fontFamily: 'Poppins'
  },
  input: {
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'teal',
    marginTop: 10,
    height: 30,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Poppins'
  },
  form: {
    margin: 10
  },
  todo: {
    backgroundColor: '#000',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  todoChecked: {
    backgroundColor: 'green'
  },
  todoText: {
    color: '#fff',
    fontSize: 20,
  },
  todoBtns: {
    flexDirection: 'row',
    gap: 10
  },
  todoBtnsText: {
    color: 'red',
    fontSize: 16
  }
});

export default App;
