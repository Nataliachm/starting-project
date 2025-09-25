import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberComponent from "../components/game/NumberComponent";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(minBoundary, maxBoundary, exclude) {
  const rndNum =
    Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;
  if (rndNum === exclude) {
    return generateRandomBetween(minBoundary, maxBoundary, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (currentGuess === userNumber) {
      Alert.alert("Game Over", "The opponent guessed your number!", [
        { text: "Start New Game", style: "default", onPress: () => {} },
      ]);
      return;
    }
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberComponent>{currentGuess}</NumberComponent>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});
