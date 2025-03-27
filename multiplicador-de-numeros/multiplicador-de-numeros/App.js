import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumeroInput from './src/components/Input/input';
import Resultado from './src/components/Resultado/resultado';
import BotaoMultiplicar from './src/components/Botao/index';
import Titulo from './src/components/Titulo/index'

const App = () => {
  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePrimeiroNumeroChange = (text) => setPrimeiroNumero(text);
  const handleSegundoNumeroChange = (text) => setSegundoNumero(text);

  const multiplicar = () => {
    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 * num2);
    } else {
      setResultado('Erro: Digite números válidos');
    }
  };

  return (
    <View>
    <Titulo/>
      <NumeroInput
        placeholder="Digite o primeiro nº"
        valor={primeiroNumero}
        onChangeText={handlePrimeiroNumeroChange}
      />
      <NumeroInput
        placeholder="Digite o segundo nº"
        valor={segundoNumero}
        onChangeText={handleSegundoNumeroChange}
      />
      <BotaoMultiplicar onPress={multiplicar} />
      <Resultado resultado={resultado} />
    </View>
  );
};

export default App