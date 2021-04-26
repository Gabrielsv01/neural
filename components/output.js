import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList

} from 'react-native';


const Output = ({ neuronios }) => {

    return (
        <View>

            <View style={styles.camada}>
                <Text style={styles.title}>Camada de Saida</Text>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    data={neuronios.value}
                    keyExtractor={(item, index) => item.neuroKey.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.input}>
                                <Text style={styles.value}>{item.neuroValue}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        borderColor: '#8C325C',
        backgroundColor: '#8C325C',
        borderWidth: 2,
        borderRadius: 50,
        height: 60,
        width: 60,
        alignItems: 'center',
        paddingTop: 18,
        marginLeft: 10,
        marginBottom:10
    },
    value:{
        color: '#FFFFFF',
    },
    title:{
        color: '#FFFFFF',
    },
    camada: {
        borderRadius: 10,
        height: 40,
        marginLeft: 20,
        marginTop:10,
        alignItems: 'flex-start',


    },

});
export default Output;