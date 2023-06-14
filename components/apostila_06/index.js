import React, { useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Apostila06(){

      const [massa, setMassa] = useState (0);
      const [altura, setAltura] = useState (0);
      const [resultado, setResultado] = useState (0);
      const [imc, setImc] = useState (0);
      

      function Calcular (){
            const valor = massa / (altura * altura);
            setResultado(valor);

            if (valor <= 18.5) {
                  setImc ('abaixo do peso!');
                }
            else (valor > 18.5 && <24.9){
                  
            }
                
      };        

      return (
            <View style={styles.container}>
                  <Text style={styles.paragraph}>Exemplo 06</Text>
                  <View style={styles.entradaImc}>
                        
                        <TextInput 
                        placeholder='Massa' 
                        placeholderTextColor='lightgray' 
                        keyboardType='numeric' 
                        style={styles.input}
                        onChangeText={(entrada) => setMassa(entrada)}
                        />

                        <TextInput 
                        placeholder='Altura' 
                        placeholderTextColor='lightgray' 
                        keyboardType='numeric' 
                        style={styles.input}
                        onChangeText={(entrada) => setAltura(entrada)}
                        />

                  </View>
                  <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
                        <Text style={styles.buttonText}>Calcular</Text>
                  </TouchableOpacity>

                  <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

                  <Text style={styles.resultados}>{imc}</Text>
            </View>
      );
};

export default Apostila06;