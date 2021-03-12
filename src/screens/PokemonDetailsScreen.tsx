import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Ability, Move, Pokemon, Type } from '../api/pokemonApi';
import { HorizontalList } from '../components/HorizontalList';
import { PokemonImage } from '../components/PokemonImage';
import { Spacer } from '../components/Spacer';
import { capitalize, getBackgroundColor } from '../utils/utils';

const deviceWidth = Dimensions.get('window').width;
function PokemonDetailsScreen({ navigation }: { navigation: any }) {
    const pokemon = navigation.getParam('pokemon')

    const types = pokemon
        .types
        .map((type: Type) => type.type.name)

    const abilities = pokemon
        .abilities
        .map((ability: Ability) => ability.ability.name)

    const moves = pokemon
        .moves
        .map((move: Move) => move.move.name)

    return (
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
        }}>
            <View style={{
                backgroundColor: `${getBackgroundColor(types[0])}`,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <PokemonImage
                    width={deviceWidth}
                    number={pokemon.id}
                />

                <Spacer>
                    <Text h2 style={{
                        alignSelf: 'center',
                        textAlign: 'center',
                    }}>
                        {capitalize(pokemon.name)}
                    </Text>
                </Spacer>

                <HorizontalList
                    title={'Types'}
                    data={types}
                />

                <HorizontalList
                    title={'Abilities'}
                    data={abilities}
                />

                <HorizontalList
                    title={'Moves'}
                    data={moves}
                />

            </View>
        </ScrollView>
    );
}

PokemonDetailsScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
    title: capitalize(navigation.getParam('pokemon', { name: 'Pokemon' }).name)
})

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
});

export default PokemonDetailsScreen