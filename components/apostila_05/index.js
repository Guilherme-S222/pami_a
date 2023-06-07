import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './styles'

function Apostila05(){
      
      const [n1, setN1] = useState (0);
      const [n2, setN2] = useState (0);
      const [total, setTotal] = useState (0);

      function Soma(){
            setTotal(parseInt(n1) + parseInt(n2));
      }

      return(
            <View style={styles.container}>
                  <Text style={styles.paragraph}>Apostila05</Text>

                  <Text style={styles.txtSaida}>Calculadora Básica</Text>

                  <Text style={styles.textLabel}>1º número</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(entrada)=> setN1(entrada)}
                        value={n1}
                        >
                  </TextInput>

                  <Text style={styles.txtSaida}>+</Text>

                  <Text style={styles.textLabel}>2º número</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(entrada)=> setN2(entrada)}
                        value={n2}
                  >
                  </TextInput>

                  <Text style={[styles.txtSaida, {margin: 0}]}>=</Text>

                  <Text style={styles.textLabel}>Total</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        editable={false}
                        value={total}
                  >
                  </TextInput>

                  <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                        <Text style={styles.textButton}>+</Text>
                  </TouchableOpacity>
           
            </View>
      )
};

export default Apostila05;
