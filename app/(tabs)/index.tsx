import { Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: Colors.light.secondary,
      }}
    >
      <Text
        style={{
          color: Colors.light.text,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Bienvenue sur votre application pour gerer vos informations personnelles{" "}
      </Text>
    </View>
  );
}
