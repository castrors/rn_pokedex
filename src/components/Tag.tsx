import React from "react"
import { Text } from "react-native";


export function Tag({ text }: { text: string }) {
    return (
        <Text
            style={{
                alignSelf: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: 8,
                margin: 8,
                padding: 4,
                overflow: 'hidden'

            }}
        >{text}</Text>

    )
}