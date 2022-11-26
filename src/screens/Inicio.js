import React, {useState}from 'react';
import {StyleSheet, View,TouchableOpacity, Image, Text,TextInput, ScrollView} from 'react-native';
import { Box, Heading, AspectRatio, Center, HStack, Stack, NativeBaseProvider } from "native-base";

export const Inicio = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
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
<View>
      <ScrollView>
      
      <View style={styles.reporton}>
          <Text style={styles.tituloreport}> Libros </Text>
        </View>
    
        

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Populares</Text>
         
          <ScrollView horizontal>
            
            <View>
            
              <Image
                style={styles.nota}
                source={require('../../assets/img/a4.png')}
           
               
                
              />
            
              
            </View>
            
            
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/Bd.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a4.png')}
              />
            </View>
            
          </ScrollView>
        
          

          <Text style={styles.titulo}>Mas Pedidos</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c+.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a2.gif')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/app.png')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Mejores Calificados ☆☆☆☆☆</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c+.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/app.png')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/pw.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Peores Calificados ☆</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/c2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/p2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B1.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Nuevos</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/app.png')}
              />
              <Text style={styles.Bd}> </Text>
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/B4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a2.gif')}
              />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/a3.jpg')}
              />
               <Text style={styles.titulo}>.</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      </View>
      
    </>
    
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
  Bd: {
    fontFamily: 'serif',
    fontSize: 18,
    color:'black',
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
    backgroundColor:'#1a1a1a',
    textAlign: 'left',
    fontSize: 18,
    borderRadius:10,
    backgroundColor: 'gainsboro',
    padding: 1,
  },
  input:{
    backgroundColor:'#1a1a1a',
    borderRadius:10,
    padding:10,
},
  tituloreport: {
    fontFamily: 'cursive',
    fontWeight: '400',
    color: 'black',
    backgroundColor:'#f5f5f5',
    fontSize: 30,
    borderRadius:0,
    textAlign: 'center',
  },
  
});

