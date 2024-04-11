import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

const NumberInput = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    value={value.toString()}
    onChangeText={onChangeText}
    selectTextOnFocus={true}
    keyboardType='numeric'
  />
);

export default function App() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)

  const labels = [
    {
      label: "Suma",
      value: (parseFloat(n1) || 0) + (parseFloat(n2) || 0)
    },
    {
      label: "Resta",
      value: (parseFloat(n1) || 0) - (parseFloat(n2) || 0)
    },
    {
      label: "Multiplicación",
      value: (parseFloat(n1) || 0) * (parseFloat(n2) || 0)
    },
    {
      label: "División",
      value: (parseFloat(n1) || 0) / (parseFloat(n2) || 0)
    }
  ]

  return (
    <View style={styles.container}>

      <ImageBackground resizeMode='cover' source={require('./assets/maths.jpg')} style={{ width: "100%", height: "100%", position: "absolute", opacity: 0.35 }} />

      <View>
        <Text style={styles.label}>Número 1:</Text>
        <NumberInput
          value={n1}
          onChangeText={setN1}
        />
      </View>

      <View>
        <Text style={styles.label}>Número 2:</Text>
        <NumberInput
          value={n2}
          onChangeText={setN2}
        />
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 25, justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
        {labels.map((item, index) => (
          <View key={index + JSON.stringify(item)} style={{ backgroundColor: "white", padding: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>{item.label}</Text>
            <Text style={{ textAlign: "center" }}>{isNaN(item.value) ? 0 : item.value % 1 === 0 ? item.value.toFixed(0) : item.value.toFixed(4)}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 10 }} />

      <Button title="Reiniciar" onPress={() => {
        setN1(0)
        setN2(0)
      }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 200,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "white"
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  }
});
