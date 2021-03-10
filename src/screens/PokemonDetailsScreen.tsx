import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function PokemonDetailsScreen() {
    return (
        <View>
            <Text style={styles.title}>
                Pokemon Details Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
});