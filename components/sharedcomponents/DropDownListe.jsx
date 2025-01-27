import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownListe = ({setSelectedCompany, placeholder}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Company A', value: 'company_a'},
    {label: 'Company B', value: 'company_b'},
  ]);

  const [searchText, setSearchText] = useState('');

  const handleAddCompany = text => {
    const trimmedText = text.trim();
    if (
      trimmedText !== '' &&
      !items.some(
        item => item.label.toLowerCase() === trimmedText.toLowerCase(),
      )
    ) {
      const newCompany = {
        label: trimmedText,
        value: trimmedText.toLowerCase().replace(/\s/g, '_'),
      };
      setItems(prevItems => [...prevItems, newCompany]);
      setValue(newCompany.value);
      setSelectedCompany(newCompany.value);
      Alert.alert('Ajouté', `${trimmedText} a été ajouté à la liste.`);
    }
  };

  const handleSearchTextChange = text => {
    setSearchText(text);

    // Vérifier si un espace a été ajouté à la fin
    if (text.endsWith(' ')) {
      handleAddCompany(text); // Ajouter l'entreprise
      setSearchText(''); // Réinitialiser le champ de recherche
    }
  };

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        placeholder={placeholder}
        searchPlaceholder="Rechercher ou ajouter..."
        onChangeValue={val => {
          setSelectedCompany(val);
        }}
        onChangeSearchText={handleSearchTextChange}
        style={styles.dropDown}
        dropDownContainerStyle={styles.dropDownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  dropDown: {
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  dropDownContainer: {
    borderColor: '#CCCCCC',
  },
});

export default DropDownListe;
