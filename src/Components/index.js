import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';

export default function Counter(){

    const [counter, setCounter] = useState(0);

    function add(){
        setCounter(counter+1)
    }

    function down(){
        setCounter(counter-1)
    }

    return(
        <View>
            <Text>Crazy Counter</Text>
            <Text>{counter}</Text>
            <Button onPress={add} title="+"></Button>
            <Button onPress={down} title="-"></Button>
        </View>
    )

}