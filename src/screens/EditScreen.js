import React, { useState, useContext } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {

    return (
        <View>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 8,
        borderWidth: 1, 
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default EditScreen;