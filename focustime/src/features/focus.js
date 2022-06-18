import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/roundedButton';
import { fontSizes, spacing } from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}  // onChangeText={(val) => setSubject(val)}
          label="What would you like to focus on?"
        />
        
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={50} onPress={ ()=> addSubject(subject) }/>
        </View>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row'
  },

  buttonContainer: {
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    fontSize: fontSizes.md-2,
    marginRight: spacing.sm,
    borderColor: colors.white,
    borderWidth: spacing.sm,
    borderRadius: spacing.sm,
  },
});