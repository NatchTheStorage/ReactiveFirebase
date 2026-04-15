import { useState } from "react"
import { View, Text } from "react-native"

export const BoxSection = (item: string) => {
  return <View>
    <Text>Text</Text>
    <Text>{item}</Text>
  </View>
}
export default function WopSection({ t }: { t: string }) {
  return <View>
    <Text>Text</Text>
    <Text>{t}</Text>
  </View>
}