
import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList

} from 'react-native';


const Neuronio = ({ neuronios }) => {

    return (
        <View>

            <View style={styles.camada}>
                <Text>Camada {neuronios.camadaKey}</Text>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    data={neuronios.value}
                    keyExtractor={(item, index) => item.neuroKey.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.neuronio}>
                                <Text>{item.neuroValue}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    neuronio: {
        borderColor: '#2f4f4f',
        backgroundColor: '#ffd700',
        borderWidth: 2,
        borderRadius: 50,
        height: 100,
        width: 100,
        alignItems: 'center',
        paddingTop: 37,
        margin: 10
    },
    camada: {
        borderRadius: 10,
        height: 40,
        width: 100,
        alignItems: 'center',
        paddingTop: 15,

    }

});
export default Neuronio;