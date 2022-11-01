import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'
import  { useState } from 'react';

const Login = () => {

  const [ setEmail] = useState('');
  const [ setPassword] = useState('');
  const handleSubmit = log => {
    log.preventDefault();
    alert("log in done successfuly");
  }


return(


<Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form    onSubmit={handleSubmit}>
            <FormControl  isRequired >
              <FormLabel>Email</FormLabel>
              <Input  type="email"
      placeholder="enter your email"
      size="lg"
      onChange={log => setEmail(log.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
      type="password"
      placeholder="*******"
      size="lg"
      onChange={log => setPassword(log.currentTarget.value)} />
            </FormControl>
            <Button  variantColor="teal"
    variant="outline"
    type="submit"
    width="full"
    mt={4}>
              login
            </Button>

          


          </form>
        </Box>
      </Box>
    </Flex>

  );
}



export default Login ;



