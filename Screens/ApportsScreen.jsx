import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ApportsScreen = () => {
  const [amount, setAmount] = useState('100.296');
  const [date, setDate] = useState('25 November 2024');
  const [category, setCategory] = useState(null);
  const [account, setAccount] = useState(null);
  const [credit, setCredit] = useState('10,000,000');
  const [debit, setDebit] = useState('10,000,000');
  const [description, setDescription] = useState('');

  const categories = [
    {label: 'Salaires', value: 'salaires'},
    {label: 'Marketing', value: 'marketing'},
    {label: 'Opérations', value: 'operations'},
  ];

  const accounts = [
    {label: 'BIAT', value: 'biat'},
    {label: 'AMEN', value: 'amen'},
    {label: 'UIB', value: 'uib'},
  ];

  const handleSave = () => {
    alert('Expense saved successfully!');
  };

  const handleDelete = () => {
    alert('Expense deleted.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Expenses</Text>

      {/* Amount */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.amountInput}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>

      {/* Date */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.dateInput}
          value={date}
          onChangeText={setDate}
        />
      </View>

      {/* Category */}
      <View style={styles.inputGroup}>
        <DropDownPicker
          open={false}
          value={category}
          items={categories}
          setValue={setCategory}
          placeholder="Select Category"
          style={styles.dropdown}
        />
      </View>

      {/* Sub-category */}
      <View style={styles.inputGroup}>
        <TextInput style={styles.textInput} placeholder="Set sub-category" />
      </View>

      {/* Description */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textArea}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Account */}
      <View style={styles.inputGroup}>
        <DropDownPicker
          open={false}
          value={account}
          items={accounts}
          setValue={setAccount}
          placeholder="Select Account"
          style={styles.dropdown}
        />
      </View>

      {/* Finance - Credit */}
      <View style={styles.inputGroupRow}>
        <DropDownPicker
          open={false}
          value={null}
          items={categories}
          placeholder="Bilan"
          style={styles.dropdownSmall}
        />
        <TextInput
          style={styles.textInputSmall}
          value={credit}
          onChangeText={setCredit}
          keyboardType="numeric"
        />
      </View>

      {/* Finance - Debit */}
      <View style={styles.inputGroupRow}>
        <DropDownPicker
          open={false}
          value={null}
          items={categories}
          placeholder="Bilan"
          style={styles.dropdownSmall}
        />
        <TextInput
          style={styles.textInputSmall}
          value={debit}
          onChangeText={setDebit}
          keyboardType="numeric"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d9534f',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  dateInput: {
    fontSize: 16,
    color: '#555',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  dropdownSmall: {
    flex: 1,
    marginRight: 10,
  },
  textInputSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#d9534f',
    padding: 15,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#5cb85c',
    padding: 15,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ApportsScreen;
