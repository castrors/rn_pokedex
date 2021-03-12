import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";

interface PokemonImageData {
    number: number,
    width: number
}

export function PokemonImage({ number, width }: PokemonImageData) {
    return (
        <View style={{
            width: width / 2,
            height: width / 2,
            marginTop: 20,
            paddingTop: 30,
            marginBottom: 10,
            backgroundColor: 'rgba(255,255,255, 0.6)',
            borderRadius: width / 4,
            paddingVertical: 5,
        }}>
            <Image
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${number}.png` }}
                style={{
                    width: width / 2,
                    height: width / 2,
                }}
            />
        </View>
    )
}