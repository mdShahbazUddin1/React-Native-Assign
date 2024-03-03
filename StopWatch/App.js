import React, { useState, useRef } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";

const App = () => {
  const [startTime, setStartTime] = useState("00:00:00");
  const [maxTime, setMaxTime] = useState("00:10:00");
  const [currentTime, setCurrentTime] = useState(startTime);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => {
        const [hours, minutes, seconds] = currentTime.split(":").map(Number);
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes++;
        }
        if (newMinutes === 60) {
          newMinutes = 0;
          newHours++;
        }
        return `${String(newHours).padStart(2, "0")}:${String(
          newMinutes
        ).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
      });
    }, 1000);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setCurrentTime(startTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{currentTime}</Text>
      <View style={styles.controls}>
        <Pressable style={styles.controlButton} onPress={startStopwatch}>
          <Text>Start</Text>
        </Pressable>
        <Pressable style={styles.controlButton} onPress={stopStopwatch}>
          <Text>Stop</Text>
        </Pressable>
        <Pressable style={styles.controlButton} onPress={resetStopwatch}>
          <Text>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.timeInputs}>
        <Text>Start Time:</Text>
        <TextInput
          style={styles.input}
          value={startTime}
          onChangeText={setStartTime}
        />
        <Text>Max Time:</Text>
        <TextInput
          style={styles.input}
          value={maxTime}
          onChangeText={setMaxTime}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 36,
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    marginBottom: 20,
  },
  controlButton: {
    backgroundColor: "lightgray",
    padding: 10,
    marginHorizontal: 10,
  },
  timeInputs: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
});

export default App;
