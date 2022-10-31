import React from 'react'
import {FaJava, FaApple , FaGithub, FaAndroid, FaAlignCenter} from 'react-icons/fa'
import {useMediaQuery} from '@chakra-ui/media-query'
import { Icon } from '@chakra-ui/react'
import {Flex, Box, Text, Center ,Spacer} from "@chakra-ui/layout"
import { Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { usePopper } from '@chakra-ui/react'
import { useMergeRefs } from '@chakra-ui/react'
import {  useOutsideClick } from '@chakra-ui/react'


function Cards() {

  const ref3 = React.useRef()
  const [isModalOpen3, setIsModalOpen3] = React.useState(false)
  useOutsideClick({
    ref: ref3,
    handler: () => setIsModalOpen2(false),
  })






  const outsideRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { popperRef, referenceRef } = usePopper()
  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  })
  const buttonEl = useMergeRefs(outsideRef, referenceRef)

  const ref = React.useRef()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  })

  
  const ref2 = React.useRef()
  const [isModalOpen2, setIsModalOpen2] = React.useState(false)
  useOutsideClick({
    ref: ref2,
    handler: () => setIsModalOpen2(false),
  })



    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (

<div>

<Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">

<Stack direction={['column', 'row']} spacing='24%'>

<Box  alignSelf="center" px="8" py="16">
  
<Center width={"90vw"} height={"60vh"}>

<Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8 }  gap='10'  >


     <Flex rounded="xl" direction ="column" mt={4} bg="blue.400" h="33vh" w="30vh"  justify= "flex-end" _hover={{bg:"teal.400",}}>
         <Icon color="white" p="4" as={FaJava} w="24" h="24"/>
           <Text color="white" p ="4" fontSize="xl" fontWeight="semibold">Java BootCamp advance</Text>

           <Button  ref={buttonEl} onClick={onOpen}   direction ="column"   colorScheme='white'   border="1px solid #EDF2F7" padding="2.5px 24px" bg='#e1eaf5'  >register now</Button>
           {isOpen && (
        <Box ref={popperRef} bg='green'>
        register is closed 
        </Box>
           )}
          
           </Flex>
    


     <Flex rounded="xl" direction ="column" mt={4} bg="blue.400" h="33vh" w="30vh"  justify= "flex-end" _hover={{bg:"teal.400",}}>
         <Icon color="white" p="4"  as={FaAndroid} w="24" h="24"/>
           <Text color="white" p ="4" fontSize="xl" fontWeight="semibold">Android studio BootCamp</Text>

           {isModalOpen ? (
        <div ref={ref}>
                  register done congrats!
        </div>
      ) : (


           <Button  onClick={() => setIsModalOpen(true)}  direction ="column"   colorScheme='white'   border="1px solid #EDF2F7" padding="2.5px 24px" bg='#e1eaf5'  >register now</Button>
           )}
     </Flex>
   
    
    
    

     <Flex rounded="xl" direction ="column" mt={4} bg="blue.400" h="33vh" w="30vh"  justify= "flex-end" _hover={{bg:"teal.400",}}>
         <Icon color="white" p="4" as={FaApple} w="24" h="24"/>
           <Text color="white" p ="4" fontSize="xl" fontWeight="semibold">Flutter BootCamp</Text>
           {isModalOpen2 ? (
        <div ref={ref2}>
                  register done congrats!
        </div>
      ) : (


           <Button  onClick={() => setIsModalOpen2(true)}  direction ="column"   colorScheme='white'   border="1px solid #EDF2F7" padding="2.5px 24px" bg='#e1eaf5'  >register now</Button>
           )}





    </Flex>



     <Flex rounded="xl" direction ="column" mt={4} bg="blue.400" h="33vh" w="30vh"  justify= "flex-end" _hover={{bg:"teal.400",}}>
         <Icon color="white" p="4" as={FaGithub} w="24" h="24"/>
           <Text color="white" p ="4" fontSize="xl" fontWeight="semibold">Github BootCamp</Text>
           {isModalOpen3 ? (
        <div ref={ref3}>
                  register done congrats!
        </div>
      ) : (


           <Button  onClick={() => setIsModalOpen3(true)}  direction ="column"   colorScheme='white'   border="1px solid #EDF2F7" padding="2.5px 24px" bg='#e1eaf5'  >register now</Button>
           )}









          
     </Flex>
    
     
     </Flex>
     </Center>     
         </Box> 

         
                   
</Stack>

</Flex>


         
</div>

);
}


export default Cards

