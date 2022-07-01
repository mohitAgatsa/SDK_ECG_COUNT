import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loadingscreen = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default Loadingscreen;

const styles = StyleSheet.create({});
