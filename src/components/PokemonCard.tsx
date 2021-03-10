import React from 'react';
import {
    StyleSheet, View
} from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

interface PokemonCardData {
    number: number;
    name: string;
    type: string;
}

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

export function PokemonCard({ number, name, type }: PokemonCardData) {
    return (
        <Card containerStyle={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: colors[type as keyof typeof colors] ?? colors.normal
        }}>
            <View style={{
                width: 120,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                paddingTop: 30,
                marginBottom: 10,
                backgroundColor: 'rgba(255,255,255, 0.6)',
                borderRadius: 60,
                paddingVertical: 5,
            }}>
                <Image
                    source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${number}.png` }}
                    style={{ width: 120, height: 120, }}
                />
            </View>
            <Text
                style={{
                    ...styles.text,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: 8,
                    margin: 8,
                    padding: 4,
                    overflow: 'hidden'

                }}
            >#{number.toString().padStart(3, '0')}</Text>
            <Text h4 style={styles.text}>
                {capitalize(name)}
            </Text>
            <Text style={styles.text}>Type: {type}</Text>
        </Card>
    );
}

function capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        textAlign: 'center',
    }
});