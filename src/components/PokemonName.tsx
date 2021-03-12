import React from "react"
import { Text } from "react-native-elements"
import { capitalize } from "../utils/utils"



export function PokemonName({ name }: { name: string }) {
    return (
        <Text h4 style={{
            alignSelf: 'center',
            textAlign: 'center',
        }}>
            {capitalize(name)}
        </Text>

    )
}