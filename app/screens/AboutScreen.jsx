import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'
import { BounceInUp, FadeInDown, FadingTransition } from 'react-native-reanimated';

const AboutScreen = () => {
  return (
    <Animated.View layout={FadeInDown}>
      <Text>AboutScreen</Text>
    </Animated.View>
  )
}
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AboutScreen