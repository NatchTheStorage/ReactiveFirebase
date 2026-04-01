import { router } from "expo-router";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Index() {
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
        <Button title="Alert" onPress={() => alert('woop')}></Button>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}>

          <Button title="To Test" onPress={() => router.navigate("/test")} />
          <Button title="To States" onPress={() => router.navigate("/states")} />
          <Button title="To Database" onPress={() => router.navigate("/database")} />
        </View>


      </View>
    </SafeAreaProvider>

  );
}
