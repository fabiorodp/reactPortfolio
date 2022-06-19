import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <>
      <SafeAreaView style={styles.containers}>
          
          {!currentSubject ? (
          <View style={styles.innerContainer}>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </View>
        ) : (
          <Timer 
            focusSubject={currentSubject}
            onTimerEnd={ (subject) => { setHistory([...history, subject]) } }
            clearSubject={() => setCurrentSubject(null)}
          />
        )}

      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create( {
  containers: { 
    flex: 1, 
    marginTop: StatusBar.currentHeight 
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.darkGreen
  }
});