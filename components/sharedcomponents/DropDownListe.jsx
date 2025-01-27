import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownListe = () => {
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
      Alert.alert('Ajouté', `${trimmedText} a été ajouté à la liste.`);
    }
  };

  const handleSearchTextChange = text => {
    setSearchText(text);

    if (text.endsWith(' ')) {
      handleAddCompany(text);
      setSearchText('');
    }
  };

  return (
    <View style={styles.wrapper}>
      {/* Encapsule le style */}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        placeholder="Select or add a company"
        searchPlaceholder="Type to search..."
        onChangeValue={val => {
          console.log('Selected:', val);
        }}
        onChangeSearchText={handleSearchTextChange}
        style={styles.dropDown} // Style personnalisé pour le Dropdown
        dropDownContainerStyle={styles.dropDownContainer} // Style pour la liste déroulante
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
