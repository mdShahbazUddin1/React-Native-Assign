import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const App = () => {
  const interests = [
    "Trying New Things",
    "Art Galleries",
    "Rave",
    "Cafe Hopping",
    "Boxing",
    "Sake",
    "Fencing",
    "Gin Tonic",
    "Baking",
    "Environmentalism",
  ];

  const [selectedCount, setSelectedCount] = useState(0);

  const handleInterestClick = () => {
    if (selectedCount < 5) {
      setSelectedCount(selectedCount + 1);
    }
  };

  return (
    <>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Interests</Text>
        <Text style={{ fontSize: 15, marginTop: 10 }}>
          Let everyone know what you're passionate about, by adding it to your
          profile
        </Text>
      </View>
      <View style={styles.container}>
        {interests?.map((interest, index) => (
          <Text key={index} style={styles.text} onPress={handleInterestClick}>
            {interest}
          </Text>
        ))}
      </View>
      <View>
        <Button
          title={`${selectedCount}/5`}
          color={selectedCount === 5 ? "pink" : "gray"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default App;
