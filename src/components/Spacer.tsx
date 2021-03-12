import React from "react"
import { View } from "react-native";

export function Spacer({ children }: { children: any }) {
    return (
        <View style={{ margin: 15 }}>{children}</View>
    )
}