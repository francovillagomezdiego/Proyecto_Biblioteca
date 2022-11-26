import React, { useEffect, useState } from 'react';
import { Box, FlatList,StyleSheet, Heading, Avatar, HStack, VStack, Text, Spacer, Image,Center, NativeBaseProvider, View } from "native-base";
import { ActivityIndicator } from 'react-native';


export const MiBiblioteca= () => {
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <NativeBaseProvider>

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <Box>
          <Heading fontSize="xl" p="4" pb="3">
            Libros
          </Heading>
          <FlatList data={data} renderItem={({
            item
          }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="black" pl={["0", "4"]} pr={["0", "5"]} py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="150px" source={{
                  uri: item.thumbnailUrl
                }} />
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {item.title}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    {item.title}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                  color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                  {item.title}
                </Text>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
        </Box>
        )}
    </View>
    </NativeBaseProvider>

  );
 
};

