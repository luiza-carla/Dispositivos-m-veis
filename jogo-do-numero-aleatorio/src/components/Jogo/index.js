import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import Titulo from '../Titulo/index';
import Imagem from '../Imagem/index';
import Campo from '../Campo/index';
import Botao from '../Botao/index';
import Resultado from '../Resultado/index';

export default function Jogo() {
  const [numeroDigitado, setNumeroDigitado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [numeroAleatorio, setNumeroAleatorio] = useState(gerarNumero());

  function gerarNumero() {
    return Math.floor(Math.random() * 11);
  }

  function verificarNumero() {
    const chute = parseInt(numeroDigitado);

    if (isNaN(chute)) {
      setMensagem('Digite um número válido.');
    } else if (chute < numeroAleatorio) {
      setMensagem('Tente um número maior.');
    } else if (chute > numeroAleatorio) {
      setMensagem('Tente um número menor.');
    } else {
      setMensagem('Parabéns! Você acertou!');
    }
  }

  function reiniciarJogo() {
    setNumeroAleatorio(gerarNumero());
    setNumeroDigitado('');
    setMensagem('Novo número gerado! Tente novamente.');
  }

  return (
    <View style={styles.container}>
      <Titulo />
      <Imagem />
      <Campo valor={numeroDigitado} setValor={setNumeroDigitado} />
      <Botao texto="Chutar" onPress={verificarNumero} />
      <Resultado texto={mensagem} />
      <Botao texto="Reiniciar" onPress={reiniciarJogo} />
    </View>
  );
}
