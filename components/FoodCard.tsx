import React from "react";
import { Box, Button, Heading, Img, Stack, Text,Modal,useDisclosure,ModalHeader,ModalOverlay,ModalCloseButton,ModalBody,ModalFooter,ModalContent,FormLabel,FormControl,Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function FoodCard() {
    return (
        <Stack m="5" rounded="lg" bg="white" flexWrap="wrap" h='auto' maxW='72'>
            <Box shadow={9}>
                <Img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    w="full"
                    h="48"
                    borderTopRadius={'lg'}
                    borderBottomRightRadius={'28px'}
                    objectFit='cover'
                />
            </Box>
            <Stack px="3">
                <Heading mt="2" fontSize={["md", "lg", "xl"]} color='black' fontWeight='medium'>
                    Cheese Pizza
                </Heading>
                <Text fontSize="md" color="gray.500" fontWeight='semibold'>
                    ₹180
                </Text>
                <Box py='4' w='full'>
                    <Button colorScheme='blue' w='full' fontWeight='semibold'>Buy now</Button>
                </Box>
            </Stack>
        </Stack>
    );
}






// export default function FoodCard() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
  
//     const initialRef = React.useRef(null)
//     const finalRef = React.useRef(null)
  
//     return (
//       <>

//         <Button rounded={"sm"} onClick={onOpen}><AddIcon/>Add Item</Button>
  
//         <Modal
//           initialFocusRef={initialRef}
//           finalFocusRef={finalRef}
//           isOpen={isOpen}
//           onClose={onClose}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Add Dish-item</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody justifyContent={'center'}>
//                 <Box boxSize={'280px'} mb={"3"} bg={"whatsapp.200"} >
                     
//                 </Box>
//                 <Button colorScheme='blue' size={"md"} w={"full"}>
//                 Choose Image
//               </Button>
//             </ModalBody>
//             <ModalBody pb={6}>
//               <FormControl>
//                 <FormLabel>Dish name</FormLabel>
//                 <Input ref={initialRef} />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Price</FormLabel>
//                 <Input ref={initialRef} />
//               </FormControl>
// {/*   
//               <FormControl mt={4}>
//                 <FormLabel>Last name</FormLabel>
//                 <Input placeholder='Last name' />
//               </FormControl> */}
//             </ModalBody>
  
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3}>
//                 Save
//               </Button>
//               <Button onClick={onClose}>Cancel</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }