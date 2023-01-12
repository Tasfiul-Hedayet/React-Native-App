import { StatusBar } from "expo-status-bar"; 
import { StyleSheet, Text, View,  Button } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>

      <Text style={{ margin: 10,  backgroundColor: 'yellow' }}>Hello World!</Text>
      <Text style={{ margin: 10 }}>This is my react native app!</Text>
      <Text style={{ margin: 10 }}>I'm Tasfiul Hedayet</Text>
      <Button
        title="Press"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
