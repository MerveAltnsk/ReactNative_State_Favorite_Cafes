import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, } from 'react-native';



function App() {

    const [number, setNumber] = useState(0);

    const [counter, setCounter] = useState(100);

    useEffect(() => {
        console.log('number updated');
    }, [number]);

    useEffect(() => {
        console.log('counter updated');
    },[counter]);
    
    return (
        <View>
            <Text> Hello Lifecycle</Text>
            <Text>Number {number}</Text>

            <Button title ="Up" onPress={() => setNumber(number + 1)}></Button>

            <Text>Counter {counter}</Text>
            <Button title ="Update Counter" onPress={() => setCounter(counter + 100)}></Button>
        </View>
    );
}



export default App;
