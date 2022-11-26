import React from "react";
import { Button, Modal, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";
import {StyleSheet,Image,View,Text,TextInput,ScrollView } from 'react-native'
export const Entrega = () => {
  const [showModal, setShowModal] = useState(false);
  return <Center>
  <View style={styles.reporton}>
          <Text style={styles.nota} 
           style={styles.tituloreport}> Genero </Text>
        </View>
    <Image    source={require('../../assets/img/B4.jpg')}  />
      <Button onPress={() => setShowModal(true)}>Ver mi Entrega</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="550" maxH="412">
          <Modal.CloseButton />
          <Modal.Header>Tu Entrega</Modal.Header>
          <Modal.Body>
          El libro Base de Datos
            Programmer
           Se entrega 30/11/2022
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Regresar
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Entendido
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>;
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
        height: 350,
        flex: 1,
      },
      
      titulo: {
        fontFamily: 'cursive',
        fontSize: 30,
        color:'lightcoral',
        marginVertical: 35,
        textAlign: 'center',
      },
    
      reporton: {
        fontWeight: '800',
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
  
    });