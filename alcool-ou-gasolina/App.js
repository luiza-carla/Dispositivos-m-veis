import { View } from 'react-native';
import Titulo from './src/components/Titulo/index';
import ImagemCombustivel from './src/components/Imagem/index';
import Campo from './src/components/Campo/index';
import BotaoVerificar from './src/components/Botao/index';
import Resultado from './src/components/Resultado/index';
import { useState} from 'react';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View>
      <Titulo />
      <ImagemCombustivel />
      <Campo tipo="álcool" value={precoAlcool} onChangeText={setPrecoAlcool} />
      <Campo tipo="gasolina" value={precoGasolina} onChangeText={setPrecoGasolina} />
      <BotaoVerificar precoAlcool={precoAlcool} precoGasolina={precoGasolina} setResultado={setResultado} />
      <Resultado resultado={resultado} />
    </View>
  );
}
