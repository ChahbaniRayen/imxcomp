import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Ammount = type => {
  const [value, setValue] = useState('000.000');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          keyboardType="numeric"
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Entrez une valeur"
          maxLength={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    backgroundColor: '#E8FFF4',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 20,
    marginTop: 25,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    padding: 5,
    margin: 5,
  },
});

export default Ammount;
