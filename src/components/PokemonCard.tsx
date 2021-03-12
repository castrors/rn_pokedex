import React from 'react';
import {
    Dimensions,
    StyleSheet, View
} from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { capitalize, getBackgroundColor } from '../utils/utils';
import { Tag } from './Tag';
import { PokemonImage } from './PokemonImage';
import { Spacer } from './Spacer';

interface PokemonCardData {
    number: number;
    name: string;
    type: string;
}

const deviceWidth = Dimensions.get('window').width;

export function PokemonCard({ number, name, type }: PokemonCardData) {
    return (
        <Card containerStyle={{
            flex: 1,
            margin: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: deviceWidth / 2,
            backgroundColor: getBackgroundColor(type)
        }}>
            <PokemonImage
                width={deviceWidth / 2}
                number={number}
            />
            <Spacer>
                <Tag text={`#${number.toString().padStart(3, '0')}`} />
            </Spacer>

            <Text h4 style={{
                alignSelf: 'center',
                textAlign: 'center',
            }}>
                {capitalize(name)}
            </Text>

            <Text style={{
                alignSelf: 'center',
                textAlign: 'center',
            }}>Type: {type}</Text>
        </Card>
    );
}



const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        textAlign: 'center',
    }
});