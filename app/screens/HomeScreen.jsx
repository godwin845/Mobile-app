import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Animated, { FadingTransition, JumpingTransition } from 'react-native-reanimated';

const HomeScreen = () => {
  return (
    <Animated.View layout={JumpingTransition} style={styles.container}>
              <Animated.View style={[styles.content]}>
          <Text style={[styles.heading]}>
            Welcome to <Text style={styles.highlight}>fURnITUrE</Text>
          </Text>
          <Text style={[styles.paragraph]}>
            <Text style={styles.highlight}>We</Text> invite you to{' '}
            <Text style={styles.highlight}>explore</Text> our products and{' '}
            <Text style={styles.highlight}>discover</Text> the perfect pieces
            to <Text style={styles.highlight}>elevate</Text> your home.
          </Text>
        </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    color: 'white',
  },
  highlight: {
    color: '#FF5B61',
  },
});

export default HomeScreen;
