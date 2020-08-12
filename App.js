import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import colors from './src/utils/colors';
import { Form } from './src/components';

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    capital: '',
    interest: '',
    months: '',
  });
  console.log(form);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeArea}>
        <View style={background} />
        <Text style={titleApp}>Cotizador de Prestamos</Text>
        <Form setSubmit={setSubmit} submit={submit} setForm={setForm} />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Button title="Enviar" onPress={() => setSubmit(true)} />
        <Text>Footer</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    height: 290,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});

const { safeArea, titleApp, background } = styles;

export default App;
