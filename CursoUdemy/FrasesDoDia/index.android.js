import React from 'react';
import { 
  Text, 
  AppRegistry 
} from 'react-native';

//Formatações
const Estilos = { 
  estiloTexto: {
    fontSize: 50
  }
};

//Criar Componente
const App = () => {
  return (
    <Text style={Estilos.estiloTexto}>Frases do Dia</Text>
  );
};

//Renderizar o componente para o dispositivo.
AppRegistry.registerComponent('FrasesDoDia', () => App);
