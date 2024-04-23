import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

class CustomButton extends Component {
  render() {
    const { title, onPress, color = "#2f4f4f" } = this.props; 
    return (
      <TouchableOpacity style={[styles.buttonImg, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonImg: {
    padding: 10,
    borderRadius: 13,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#CCCCCC",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
