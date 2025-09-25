import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>
    </View>
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  container: { flex: 1 },
});
