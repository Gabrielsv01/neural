import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text>teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff7f50',
        height: 60,
        alignItems: 'center',
        flex: 1,
        paddingTop: 17
        
    },
    
});

export default Header;