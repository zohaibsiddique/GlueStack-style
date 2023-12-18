import { Box, FlatList, VStack } from '@gluestack-ui/themed';
import React from 'react';
import {Text} from 'react-native';
import { useSelector } from 'react-redux';
import AddPostForm from './features/AddPostForm';

export default function Index() {

  const posts = useSelector(state => state.posts)

  return <VStack>
      <h1>Add New Post</h1>
      <AddPostForm/>
      <br></br>
      <h1>Posts</h1>
      <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Box>
              <Text>{item.title}</Text>
            </Box>
            )}
          keyExtractor={(item) => item.id}
        
        />
    </VStack>
  
};