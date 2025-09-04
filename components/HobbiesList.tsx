import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HobbiesList({
  hobbies,
  onAddHobbies,
  onRemoveHobbies,
}: any) {
  const [newHobbies, setNewHobbies] = useState("");

  const handleAdd = () => {
    if (newHobbies) {
      onAddHobbies(newHobbies);
      setNewHobbies("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Hobbies</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter un hobby..."
          value={newHobbies}
          onChangeText={setNewHobbies}
        />
        <Button title="Ajouter" onPress={handleAdd} color={Colors.light.tint} />
      </View>
      <FlatList
        data={hobbies}
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <Text>{item}</Text>
            <Pressable onPress={() => onRemoveHobbies(item)}>
              <AntDesign
                name="closecircle"
                size={18}
                color={Colors.light.tint}
              />
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  hobbyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 5,
  },
});
