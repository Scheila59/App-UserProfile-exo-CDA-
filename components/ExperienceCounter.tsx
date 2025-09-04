import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

type ExperienceCounterProps = {
  experience: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function ExperienceCounter({
  experience,
  onIncrease,
  onDecrease,
}: ExperienceCounterProps) {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.label}>Expérience professionnelle:</Text>
      <View style={styles.buttonGroup}>
        <Pressable
          onPress={onDecrease}
          style={{
            backgroundColor: Colors.light.tint,
            borderRadius: 6,
          }}
        >
          <Text style={styles.value}>-</Text>
        </Pressable>
        <Text style={styles.value}>{experience} ans</Text>
        <Pressable
          onPress={onIncrease}
          style={{
            backgroundColor: Colors.light.tint,
            borderRadius: 6,
          }}
        >
          <Text style={styles.value}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: Colors.light.text,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: Colors.light.text,
  },
});
