import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text>About the job:</Text>
      <View style={styles.contentBox}></View>
      <Text style={styles.contextText}>{info}</Text>
    </View>
  );
};

export default About;
