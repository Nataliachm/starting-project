import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/color";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Colors.accent500, Colors.primary700]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {!userNumber && (
              <StartGameScreen onPickNumber={pickedNumberHandler} />
            )}

            {userNumber && !gameOver && (
              <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
              />
            )}
            {gameOver && <GameOverScreen />}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
