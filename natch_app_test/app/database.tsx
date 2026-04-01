import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { colors } from "./components/styles/styles";
import { createItem, getItems } from "./services/firestore-service";





export default function Database() {
  const [textInput, setTextInput] = useState<string>("")
  const [numberInput, setNumberInput] = useState<number>()
  const [items, setItems] = useState<any[] | undefined>([])


  const displayTest = async () => {
    await getItems()
      .then((data) => {
        console.log(data);
        setItems(data.map((i) => { return { ...i } }));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submit = async (name: string, number: number) => {
    await createItem(name, number)
  }

  useEffect(() => {
    setTextInput("");
    setNumberInput(undefined);
    setItems([])
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <View>
        <Text>Item</Text>
        <Button title="Get Items" onPress={displayTest}></Button>
        <Text>{items?.map((i) => { return <Text>{i.name} and {i.number}</Text> })}</Text>
      </View>

      <Text>Create New Database Object</Text>

      <View style={{ flexDirection: "row", gap: 16 }}>
        <Text>Name: </Text>
        <TextInput style={{ backgroundColor: colors.background }} onChangeText={(value) => setTextInput(value)}></TextInput>
      </View>

      <View style={{ flexDirection: "row", gap: 1 }}>
        <Text>Number: </Text>
        <TextInput inputMode="numeric" style={{ backgroundColor: colors.background }} onChangeText={(value) => setNumberInput(Number.parseInt(value))}></TextInput>
      </View>

      <Text>Current Object</Text>
      <Text>Name: {textInput}</Text>
      <Text>Number: {numberInput}</Text>
      <Button disabled={!numberInput} title="Submit" onPress={() => submit(textInput, numberInput || 0)}></Button>
    </View>

  );
}
