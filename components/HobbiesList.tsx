import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Colors from "../constants/Colors";

export default function HobbiesList({
  hobbies,
  onAddHobbies,
  onRemoveHobbies,
}: {
  hobbies: string[];
  onAddHobbies: (hobby: string) => void;
  onRemoveHobbies: (hobby: string) => void;
}) {
  const [newHobbies, setNewHobbies] = useState("");

  const handleAdd = () => {
    if (newHobbies) {
      Keyboard.dismiss();
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
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <Pressable onPress={handleAdd}>
          <Text style={styles.addButton}>Ajouter</Text>
        </Pressable>
      </View>
      {hobbies.map((item, index) => (
        <View key={index.toString()} style={styles.hobbyItem}>
          <Text>{item}</Text>
          <Pressable onPress={() => onRemoveHobbies(item)}>
            <AntDesign name="closecircle" size={18} color={Colors.light.tint} />
          </Pressable>
        </View>
      ))}
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
    alignItems: "center",
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
  addButton: {
    backgroundColor: Colors.light.secondary,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
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
