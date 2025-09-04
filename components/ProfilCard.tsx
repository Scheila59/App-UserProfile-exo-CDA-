import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function ProfilCard({ user }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture }} style={styles.profilImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.name}>{user.surname}</Text>
      <Text style={styles.info}>Age: {user.age} ans</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: Colors.light.cardBackground,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  profilImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#c65c7b",
  },
  info: {
    fontSize: 16,
    color: "#be4876",
  },
});
