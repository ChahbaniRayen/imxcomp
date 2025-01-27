import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownListe from '../components/sharedcomponents/DropDownListe';

const ChoseCompanyScreen = ({navigation}) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleValidation = () => {
    if (selectedCompany) {
      alert(`Company "${selectedCompany}" selected!`);
      // Navigation ou logique supplémentaire ici
    } else {
      alert('Please select a company before proceeding.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose your company</Text>
      <DropDownListe onChangeValue={value => setSelectedCompany(value)} />
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChoseCompanyScreen;
