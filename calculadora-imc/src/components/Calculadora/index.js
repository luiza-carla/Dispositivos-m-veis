import { useState } from 'react';
import { View } from 'react-native';
import Titulo from '../Titulo/index';
import Campo from '../Campo/index';
import Botao from '../Botao/index';
import Resultado from '../Resultado/index';
import { styles } from './style';

export default function Calculadora() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (!peso || !altura) {
      setResultado('Preencha ambos os campos.');
      return;
    }

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      setResultado('Insira valores numéricos válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade grau 1';
    else if (imc < 39.9) classificacao = 'Obesidade grau 2';
    else classificacao = 'Obesidade grau 3';

    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
  }

  return (
    <View style={styles.container}>
      <Titulo />
      <Campo placeholder="Peso (kg)" valor={peso} setValor={setPeso} />
      <Campo placeholder="Altura (m)" valor={altura} setValor={setAltura} />
      <Botao acao={calcularIMC} />
      <Resultado resultado={resultado} />
    </View>
  );
}
