import { router } from "expo-router";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Test() {
  return (
    <SafeAreaProvider>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>Hello World!</Text>
        <Button title="Alert" onPress={() => alert('woop')}></Button>
        

      </View>


    </SafeAreaProvider>

  );
}
