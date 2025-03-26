import { View, Text} from 'react-native';
import { useState} from 'react'
import ButtonAumentar from './src/components/buttonAumentar/index';
import ButtonDiminuir from './src/components/buttonDiminuir/index';
import ExibirNumero from './src/components/exibirNumero/index';

function App() {
  const [numero, setNumero] = useState(0);

  function Aumentar() {
    setNumero(numero + 1);
  }

  function Diminuir() {
    if (numero > 0) setNumero(numero - 1);
  }

  return (
    <View>
      <ExibirNumero numero={numero} />
      <ButtonAumentar aumentar={Aumentar} />
      <ButtonDiminuir diminuir={Diminuir} />
    </View>
  )
}

export default App;
