import React from 'react'
import { IconButton } from '@chakra-ui/button'
import {Flex , Heading, VStack} from "@chakra-ui/layout"
import{FaSun,FaMoon, FaTwitter , FaLinkedin} from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import {Spacer} from '@chakra-ui/react'
import {Link} from 'react-router-dom';

function Nav() {
 


  const {colorMode, toggleColorMode}= useColorMode();
  const isDark= colorMode==="dark";
  
  
  return (
  < VStack p={5} color={"black"}>
 
    <Flex w="100%"   border="1px solid #EDF2F7" padding="2.5px 24px" bg='#e1eaf5' >
     <Heading
     ml="8" size="md" fontWeight= 'semibold' color="cyan.400"> Tuwaiq Academy </Heading>
     
     <Spacer></Spacer>
     <ul>
    <Link to= "home">home</Link>
    </ul>
    <IconButton ml={8} icon={isDark ?<FaSun />:<FaMoon/>} isRound="true" onClick={toggleColorMode}> </IconButton>
    <IconButton  ml={2}icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}> </IconButton>
    <IconButton ml={2} icon={<FaTwitter/>} isRound="true" onClick={toggleColorMode}> </IconButton>
    
   
   
    </Flex>
    

    

   </VStack>
   

  )
}

export default Nav