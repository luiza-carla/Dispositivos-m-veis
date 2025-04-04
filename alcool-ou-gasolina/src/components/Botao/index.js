import { Pressable, Text } from 'react-native';
import { styles } from './style';

export default function BotaoVerificar({ precoAlcool, precoGasolina, setResultado }) {
  function calcular() {
    if (!precoAlcool || !precoGasolina) {
      setResultado('Preencha os 2 campos.');
    } else if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
      setResultado('Por favor, insira apenas números válidos.');
    } else {
      const relacao = parseFloat(precoAlcool) / parseFloat(precoGasolina);
      setResultado(relacao < 0.7 ? 'O álcool é melhor' : 'A gasolina é melhor');
    }
  }

  return (
    <Pressable style={styles.botao} onPress={calcular}>
      <Text style={styles.texto}>Verificar</Text>
    </Pressable>
  );
}
