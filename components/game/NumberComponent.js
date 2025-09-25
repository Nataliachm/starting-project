import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function NumberComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberComponent;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
