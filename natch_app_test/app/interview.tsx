
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./components/styles/styles";

export default function Interview() {
  const [increment, setIncrement] = useState(0)

  useEffect(() => {
    setIncrement(0);
  }, [])
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Current Increment</Text>
        <Text style={styles.textLarge}>{increment}</Text>
        <Button title="Increment" onPress={() => setIncrement(increment + 1)} />
      </View>


    </SafeAreaProvider>

  );
}
