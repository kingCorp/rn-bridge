/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {panGestureHandler, withOffset} from 'react-native-redash';

const HeartOfTheMatter = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  //animations gestures
  const {gestureHandler, translation, state} = panGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.container}>
          <PanGestureHandler {...gestureHandler}>
            <Animated.View
              style={[
                styles.ball,
                {transform: [{translateX}, {translateY}]},
              ]}></Animated.View>
          </PanGestureHandler>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default HeartOfTheMatter;
