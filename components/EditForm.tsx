import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

export default function EditForm({ user, onSave, onCancel }: any) {
  const [editUser, setEditUser] = useState(user);

  const handleSave = () => {
    // Basic validation
    if (!editUser.name || !editUser.email) {
      Alert.alert("Erreur", "Le nom et l'email ne peuvent pas être vides.");
      return;
    }
    onSave(editUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le profil</Text>
      <TextInput
        style={styles.input}
        placeholder="Prenom"
        value={editUser.name}
        onChangeText={(text) => setEditUser({ ...editUser, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={editUser.surname}
        onChangeText={(text) => setEditUser({ ...editUser, surname: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Âge"
        keyboardType="numeric"
        value={String(editUser.age)}
        // met à jour que si l'état et le texte est un nombre valide ou une chaine vide
        onChangeText={(text) => {
          const number = Number(text);
          if (!isNaN(number) || text === "") {
            setEditUser({ ...editUser, age: number });
          }
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={editUser.email}
        onChangeText={(text) => setEditUser({ ...editUser, email: text })}
      />
      <View style={styles.buttonContainer}>
        <Button title="Annuler" onPress={onCancel} color="red" />
        <Button
          title="Enregistrer"
          onPress={() => onSave(editUser)}
          color={Colors.light.tint}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
