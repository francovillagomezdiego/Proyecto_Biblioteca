import React from 'react'
import {StyleSheet, Image,View,Text,TextInput,ScrollView } from 'react-native'
import { Button, Modal, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";
export const Genero = () => {
  const [task,setTask] = useState('')
  
    return (
      <>
      <View>
      <TextInput 
      onChange= {setTask}
      placeholder = "Buscar"
      style= {styles.input}
      value ={task}
      />
    </View>
     <ScrollView>
      
      <View style={styles.reporton}>
          <Text style={styles.tituloreport}> Genero </Text>
        </View>
    
        

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Base de datos</Text>
         
          <ScrollView horizontal>
            
            <View>
            
              <Image
                style={styles.nota}
                source={require('../../assets/img/B1.jpg')}
           
               
                
              />
                <Text style={styles.Bd}>PostgresSQL</Text>
              
             
              
            </View>
            
            
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/Bd.jpg')}
              />
              <Text style={styles.Bd}>Sistema de B.D</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/Bd2.jpg')}
              />
              <Text style={styles.Bd}>Introduccion a B.D</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B3.jpg')}
              />
              <Text style={styles.Bd}>Database Desing</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B4.jpg')}
              />
              <Text style={styles.Bd}>Base de Datos</Text>
            </View>
            
          </ScrollView>
        
          

          <Text style={styles.titulo}>Aplicaciones Moviles</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/app.png')}
              />
              <Text style={styles.Bd}>Diseño de Apps</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a3.jpg')}
              />
              <Text style={styles.Bd}>Android</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p2.jpg')}
              />
              <Text style={styles.Bd}>El Gran Libro D.W</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p3.jpg')}
              />
              <Text style={styles.Bd}>Diseño Web</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p4.jpg')}
              />
              <Text style={styles.Bd}>D.W Principiantes</Text>
            </View>
          </ScrollView>
          <Text style={styles.titulo}>C++</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c+.jpg')}
              />
              <Text style={styles.Bd}>Curso De Programacion</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c1.jpg')}
              />
              <Text style={styles.Bd}>C/C</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c2.jpg')}
              />
              <Text style={styles.Bd}>P. Orientada a Objetos</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c3.jpg')}
              />
              <Text style={styles.Bd}>Lenguaje de P.</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c4.png')}
              />
               <Text style={styles.Bd}>Lenguaje de C</Text>
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Paginas Web</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/pw.jpg')}
              />
               <Text style={styles.Bd}>Como crear P.W</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p2.jpg')}
              />
               <Text style={styles.Bd}>El gran Libro D.W</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p3.jpg')}
              />
               <Text style={styles.Bd}>Diseño web</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p1.jpg')}
              />
               <Text style={styles.Bd}>Primer sito web</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p4.jpg')}
              />
                 <Text style={styles.Bd}>D.W para Principiantes</Text>
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Java Script</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/1.jpg')}
              />
                 <Text style={styles.Bd}>Aprendiendo JS</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/javascript.png')}
              />
                 <Text style={styles.Bd}>JavaScript</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/419Xw-rPXlL.jpg')}
              />
                <Text style={styles.Bd}>JavaScript Guia</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/images.jpg')}
              />
              <Text style={styles.Bd}>Estructura de Dados</Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/j.jpg')}
                
              />
              <Text style={styles.Bd}>Aprendiendo JS</Text>
               <Text style={styles.titulo}></Text>
              
            </View>
          </ScrollView>
        </View>
      </ScrollView>
            
       </>
      );
  };
  
  
      export default () => {
          return (
            <NativeBaseProvider>
              <Center flex={1} px="3">
                  <Example />
              </Center>
            </NativeBaseProvider>
          );
      };
      const styles = StyleSheet.create({
        banner: {
          height: 250,
          flex: 1,
        },
        
        titulo: {
          fontFamily: 'cursive',
          fontSize: 30,
          color:'lightcoral',
          marginVertical: 35,
          textAlign: 'center',
        },
        contenedor: {
          marginHorizontal: 10,
        },
        nota: {
          width: 200,
          height: 250,
          marginRight: 10,
        },
        mejores: {
          width: '100%',
          height: 200,
          marginVertical: 5,
        },
        listado: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        listadoItem: {
          flexBasis: '49%',
        },
        reporton: {
          fontWeight: '600',
          textAlign: 'left',
          fontSize: 18,
          borderRadius:10,
          backgroundColor: 'gainsboro',
          padding: 1,
        },
        tituloreport: {
          fontFamily: 'cursive',
    fontWeight: '400',
    color: 'black',
    fontSize: 30,
    backgroundColor:'#f5f5f5',
    borderRadius:0,
    textAlign: 'center',
        },
        input:{
          backgroundColor:'#1a1a1a',
          borderRadius:10,
          padding:10,
      },
      Bd: {
        fontFamily: 'serif',
        fontSize: 18,
        color:'black',
        marginVertical: 35,
        textAlign: 'center',
      },
      });