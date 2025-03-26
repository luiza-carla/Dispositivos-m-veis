
import { Button } from 'react-native';


function buttonDiminuir({ diminuir }) {
  return (
    <Button title="Diminuir" onPress={diminuir} color= 'pink' />
  );
}

export default buttonDiminuir;
