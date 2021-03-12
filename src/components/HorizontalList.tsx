import React from "react"
import { FlatList, View } from "react-native";
import { Text } from "react-native-elements";
import { Spacer } from "./Spacer";
import { Tag } from "./Tag";


export function HorizontalList({ title, data }: { title: string, data: string[] }) {
    return (
        <View style={{
            alignSelf: 'stretch',
        }}>
            <Spacer>
                <Text h3>{title}</Text>
            </Spacer>

            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => `${title}_${item}`}
                renderItem={({ item }) => {
                    return (
                        <Tag text={item} />
                    )
                }}
            />

        </View>

    )
}