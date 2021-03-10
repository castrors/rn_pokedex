import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ListRenderItem } from 'react-native';
import { PokemonCard } from '../components/PokemonCard';
import PropTypes from 'prop-types';
import { fetchPokemons, Pokemon } from '../api/pokemonApi';
import { FlatList } from 'react-native-gesture-handler';

export function PokemonListScreen() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        async function getAllPokemons() {
            const pokemons = await fetchPokemons()
            setPokemonList([...pokemonList, ...pokemons])
        }
        getAllPokemons()
    }, [])

    const renderPokemonCards: ListRenderItem<Pokemon> = ({ item }) => (
        <PokemonCard
            number={item.id}
            name={item.name}
            type={`${item.types[0].type.name}`}
        />
    )

    return (
        <View>
            <FlatList
                data={pokemonList}
                keyExtractor={(pokemon) => `${pokemon.id}`}
                renderItem={renderPokemonCards}
                numColumns={2}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
});