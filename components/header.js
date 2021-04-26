import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#022873',
        height: 60,
        alignItems: 'center',
        flex: 1,
        paddingTop: 17
        
    },
    title:{
        color: '#FFFFFF',
    },
    
});

export default Header;