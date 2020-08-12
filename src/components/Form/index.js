import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import colors from '../../utils/colors';

const Form = ({ setSubmit, submit, setForm }) => {
  const [capital, setCapital] = useState('');
  const [interest, setInterest] = useState('');
  const [months, setMonths] = useState('');

  useEffect(() => {
    const validation = capital !== '' && interest !== '' && months !== '';
    if (submit && validation) {
      setForm({
        capital,
        interest,
        months,
      });
      setSubmit(false);
    }
  }, [submit, capital, interest, months, setSubmit, setForm]);

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Cantidad a pedir"
          onChangeText={(t) => setCapital(t)}
        />
        <TextInput
          style={[styles.input, styles.percentage]}
          keyboardType="numeric"
          placeholder="Interés %"
          onChangeText={(t) => setInterest(t)}
        />
      </View>
      <Picker
        selectedValue={months}
        style={styles.picker}
        onValueChange={(t) => setMonths(t)}>
        <Picker.Item label="-- Seleccione --" value={''} />
        <Picker.Item label="3 meses" value={3} />
        <Picker.Item label="6 meses" value={6} />
        <Picker.Item label="12 meses" value={12} />
        <Picker.Item label="24 meses" value={24} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    width: '85%',
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: -50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 220,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    flexBasis: '57%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  percentage: {
    flexBasis: '40%',
  },
  picker: {
    fontSize: 16,
    borderWidth: 0.5,
    color: 'black',
    backgroundColor: '#fff',
    paddingRight: 30,
  },
});

export default Form;
