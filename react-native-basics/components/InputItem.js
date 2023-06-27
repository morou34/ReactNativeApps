import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

function InputItem(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="add a new goal"
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default InputItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
