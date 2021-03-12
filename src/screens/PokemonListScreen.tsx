import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ListRenderItem, ActivityIndicator } from 'react-native';
import { PokemonCard } from '../components/PokemonCard';
import PropTypes from 'prop-types';
import { fetchPokemons, Pokemon } from '../api/pokemonApi';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

function PokemonListScreen({ navigation }: { navigation: any }) {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        async function getAllPokemons() {
            const pokemons = await fetchPokemons()
            setPokemonList([...pokemonList, ...pokemons])
        }
        getAllPokemons()
    }, [])

    const renderPokemonCards: ListRenderItem<Pokemon> = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { pokemon: item })}>
            <PokemonCard
                number={item.id}
                name={item.name}
                type={`${item.types[0].type.name}`}
            />
        </TouchableOpacity>
    )

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {pokemonList.length === 0
                ? <ActivityIndicator size="large" />
                : <FlatList
                    data={pokemonList}
                    keyExtractor={(pokemon) => `${pokemon.id}`}
                    renderItem={renderPokemonCards}
                    numColumns={2}
                />
            }


        </View>
    );
}

PokemonListScreen.navigationOptions = {
    title: 'Pokedex'
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
});

export default withNavigation(PokemonListScreen)